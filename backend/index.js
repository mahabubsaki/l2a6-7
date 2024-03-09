const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to MongoDB


        const db = client.db('Assingment-6');
        const userCollection = db.collection('users');
        const reliefCollection = db.collection('relief');

        // User Registration
        app.post('/api/v1/register', async (req, res) => {
            const { name, email, password } = req.body;

            // Check if email already exists
            const existingUser = await userCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists'
                });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Generate JWT token
            const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });
            // Insert user into the database
            const { insertedId } = await userCollection.insertOne({ name, email, password: hashedPassword });

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                user: { name, email, id: insertedId },
                token
            });
        });

        // User Login
        app.post('/api/v1/login', async (req, res) => {
            const { email, password } = req.body;

            // Find user by email
            const user = await userCollection.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });

            res.json({
                success: true,
                message: 'Login successful',
                user: { name: user.name, email: user.email, id: user._id },
                token
            });
        });


        // ==============================================================
        // WRITE YOUR CODE HERE
        // ==============================================================

        app.get('/api/v1/relief-goods-all', async (req, res) => {
            const relief = await reliefCollection.find({}).toArray();
            res.send(relief);
        });
        app.get('/api/v1/relief-goods-top', async (req, res) => {
            const relief = await reliefCollection.find({}).limit(6).toArray();
            res.send(relief);
        });
        app.get('/api/v1/relief-goods/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const relief = await reliefCollection.findOne({ _id: new ObjectId(id) });

                res.send(relief);
            }
            catch (e) {

                res.status(400).send({ message: "Invalid id" });
            }
        });
        app.delete('/api/v1/relief-goods/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const relief = await reliefCollection.deleteOne({ _id: new ObjectId(id) });

                res.send({ success: true, message: "Relief goods deleted successfully" });
            }
            catch (e) {

                res.status(400).send({ message: "Invalid id" });
            }
        }
        );
        app.post('/api/v1/create-supply', async (req, res) => {
            try {
                await reliefCollection.insertOne({ ...req.body });
                res.send({ success: true, message: "Relief supply created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        });
        app.put('/api/v1/update-supply/:id', async (req, res) => {
            try {
                await reliefCollection.updateOne({ _id: new ObjectId(req.params.id) }, {
                    $set: {
                        ...req.body
                    }
                });
                res.send({ success: true, message: "Relief updated successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        });
        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } finally {
    }
}
const x = 'a';

run().catch(console.dir);

// Test route
app.get('/', (req, res) => {
    const serverStatus = {
        message: 'Server is running smoothly',
        timestamp: new Date()
    };
    res.json(serverStatus);
});
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
        const communityCollection = db.collection('community');
        const commentCollection = db.collection('comments');
        const donationCollection = db.collection('donations');
        const testimonialCollection = db.collection('testimonials');
        const volunteerCollection = db.collection('volunteers');

        // User Registration
        app.post('/api/v1/register', async (req, res) => {
            const { name, email, password, photoURL } = req.body;

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
            const { insertedId } = await userCollection.insertOne({ name, email, password: hashedPassword, photoURL });

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                user: { name, email, _id: insertedId, photoURL },
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
                user: { name: user.name, email: user.email, _id: user._id, photoURL: user.photoURL },
                token
            });
        });

        //Create Community
        app.post('/api/v1/create-community', async (req, res) => {
            try {
                await communityCollection.insertOne({ ...req.body, user: new ObjectId(req.body.user), timestamp: new Date() });
                res.send({ success: true, message: "Community created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        }
        );

        // Get all testimonials
        app.get('/api/v1/testimonials', async (req, res) => {
            const testimonials = await testimonialCollection.find({}).toArray();
            res.send(testimonials);
        });

        // Create testimonial
        app.post('/api/v1/create-testimonial', async (req, res) => {
            try {
                await testimonialCollection.insertOne({ ...req.body });
                res.send({ success: true, message: "Testimonial created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        }
        );


        //Get user by id
        app.get('/api/v1/user-by-id/:id', async (req, res) => {
            try {
                const user = await userCollection.findOne({ _id: new ObjectId(req.params.id) });
                res.send(user);
            }
            catch (e) {
                res.status(400).send({ message: "Invalid id" });
            }
        }
        );

        // get all community post
        app.get('/api/v1/community-all', async (req, res) => {
            const community = await communityCollection.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'user'
                    }
                },
                {
                    $lookup: {
                        from: 'comments',
                        localField: '_id',
                        foreignField: 'community',
                        as: 'comments'
                    }
                },
                {
                    $unwind: '$user'
                },

                {
                    $sort: { timestamp: -1 }
                },
                {
                    $project: {
                        _id: 1,
                        userId: 1,
                        title: 1,
                        content: 1,
                        timestamp: 1,
                        user: {
                            _id: 1,
                            name: 1,
                            email: 1,
                            photoURL: 1
                        },
                        comments: {
                            _id: 1,
                            user: 1,
                            community: 1,
                            comment: 1,
                            timestamp: 1
                        }
                    }
                }]).toArray();

            res.send(community);
        });

        // get single community post
        app.get('/api/v1/community/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const community = await communityCollection.aggregate([
                    {
                        $match: { _id: new ObjectId(id) }
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'user',
                            foreignField: '_id',
                            as: 'user'
                        }
                    },
                    {
                        $lookup: {
                            from: 'comments',
                            localField: '_id',
                            foreignField: 'community',
                            as: 'comments'
                        }
                    },
                    {
                        $unwind: { path: '$user', preserveNullAndEmptyArrays: true }
                    },
                    {
                        $unwind: { path: '$comments', preserveNullAndEmptyArrays: true }
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'comments.user',
                            foreignField: '_id',
                            as: 'comments.user'
                        }
                    },
                    {
                        $group: {
                            _id: '$_id',
                            userId: { $first: '$userId' },
                            title: { $first: '$title' },
                            content: { $first: '$content' },
                            timestamp: { $first: '$timestamp' },
                            user: { $first: '$user' },
                            comments: { $push: '$comments' }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            userId: 1,
                            title: 1,
                            content: 1,
                            timestamp: 1,
                            user: {
                                _id: 1,
                                name: 1,
                                email: 1,
                                photoURL: 1
                            },
                            comments: {
                                _id: 1,
                                user: { $arrayElemAt: ['$comments.user', 0] },
                                community: 1,
                                comment: 1,
                                timestamp: 1
                            }
                        }
                    }
                ]).toArray();

                console.log(community);


                res.send(community[0]);
            }
            catch (e) {
                console.log(e);
                res.status(400).send({ message: "Invalid id" });
            }
        });

        // create comment
        app.post('/api/v1/create-comment', async (req, res) => {
            try {
                await commentCollection.insertOne({ ...req.body, user: new ObjectId(req.body.user), community: new ObjectId(req.body.community), timestamp: new Date() });
                res.send({ success: true, message: "Comment created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        }
        );


        // post a volunteer

        app.post('/api/v1/create-volunteer', async (req, res) => {

            try {
                const user = await volunteerCollection.findOne({ email: req.body.email });
                if (user) {
                    return res.status(400).json({
                        success: false,
                        message: 'User already exists'
                    });
                }
                await volunteerCollection.insertOne({ ...req.body, user: new ObjectId(req.body.user), timestamp: new Date() });
                res.send({ success: true, message: "Volunteer created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        }
        );


        // get all volunteers

        app.get('/api/v1/volunteers', async (req, res) => {

            const volunteers = await volunteerCollection.find({}).toArray();
            res.send(volunteers);
        });
        // create donation

        app.post('/api/v1/create-donation', async (req, res) => {

            try {

                await donationCollection.insertOne({ ...req.body, user: new ObjectId(req.body.user), timestamp: new Date() });
                res.send({ success: true, message: "Donation created successfully" });
            }
            catch (e) {
                res.status(400).send({ message: "Unknown Error" });
            }
        }
        );

        // get donation leaderboard

        app.get('/api/v1/donation-leaderboard', async (req, res) => {
            const donation = await donationCollection.aggregate([
                {
                    $lookup: {
                        from: 'users',
                        localField: 'user',
                        foreignField: '_id',
                        as: 'user'
                    }
                },
                {
                    $unwind: '$user'
                },
                {
                    $group: {
                        _id: '$user._id',
                        name: { $first: '$user.name' },
                        email: { $first: '$user.email' },
                        photoURL: { $first: '$user.photoURL' },
                        totalAmount: { $sum: '$quantity' }
                    }
                },
                {
                    $sort: { totalAmount: -1 }
                },
                {
                    $limit: 10
                }
            ]).toArray();

            res.send(donation);
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
                await reliefCollection.deleteOne({ _id: new ObjectId(id) });

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
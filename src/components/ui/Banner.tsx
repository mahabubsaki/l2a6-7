import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import banner from '../../assets/istockphoto-1333961968-612x612.jpg';

const Banner = () => {
    return (
        <section style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2  items-center gap-8 ">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-main font-bold">
                    Making a Difference
                </span>
                <h3 className="text-3xl md:text-5xl text-white font-semibold">
                    Support Our Cause through Charitable Giving
                </h3>
                <p className="text-base md:text-lg text-white my-4 md:my-6">
                    Welcome to AidPulse, where we believe in the power of generosity to transform lives and communities. Through our charitable initiatives, we strive to address pressing social issues, promote education, support healthcare, and uplift underserved populations. Join us in our mission to make a meaningful difference in the world through your charitable contributions.
                </p>
                <button className="bg-main text-white font-medium py-2 px-4 rounded transition-all hover:bg-opacity-35 active:scale-95">
                    Discover More
                </button>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array: typeof squareData) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        src: "https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1608555855762-2b657eb1c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 5,
        src: "https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1643321613180-68d62b93cb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1623931581557-b1e4a4502635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 10,
        src: "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 12,
        src: "https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 13,
        src: "https://plus.unsplash.com/premium_photo-1661516099392-bfe29e238120?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 14,
        src: "https://plus.unsplash.com/premium_photo-1678837556088-a42410855d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 15,
        src: "https://plus.unsplash.com/premium_photo-1683134261048-dfb427f8becf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjaGFyaXR5fGVufDB8fDB8fHww",
    },
    {
        id: 16,
        src: "https://plus.unsplash.com/premium_photo-1663100421650-f0a0083b5879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxjaGFyaXR5fGVufDB8fDB8fHww",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef<number | undefined>(undefined);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Banner;
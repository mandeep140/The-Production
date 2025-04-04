import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const More = () => {
    const containerRef = useRef(null)
    const [isPinned, setIsPinned] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * 3.65]); 

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.98 && latest > 0) {
            setIsPinned(true);
        } else {
            setIsPinned(false);
        }
    });

    const cards = [
        { title: "Large library", description: "A large library of shows that sufficient for life" },
        { title: "Everything as your mood", description: "Watch what you want, when you want" },
        { title: "THE PRODUCTION", description: "Shows that you never want to miss" },
        { title: "NETFLIX", description: "Owner of all shows shown on this site" }
    ]

    return (
        <div className="max-w-screen mx-auto w-full h-[400vh] overflow-hidden bg-black relative" ref={containerRef}>
            <motion.div
                style={{
                    position: isPinned ? 'fixed' : 'relative',
                    top: isPinned ? 0 : 'auto',
                    left: 0,
                    display: 'flex',
                    x,
                    width: isPinned ? '100%' : 'auto', 
                }}
                className="flex flex-nowrap h-screen"
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="h-full w-screen flex-shrink-0 flex items-center justify-center flex-col p-4 md:p-8 bg-black"
                    >
                        <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-white">{card.title}</h1>
                        <p className="text-base md:text-xl text-center max-w-xs md:max-w-2xl text-white">{card.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default More;

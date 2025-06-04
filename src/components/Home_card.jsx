import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home_card = () => {
    const defaultImage = '/resources/TP_logo.jpg'
    const [currentImage, setCurrentImage] = useState(defaultImage)
    const rightContainerRef = useRef(null)
    const imageRef = useRef(null)
    
    useEffect(() => {
        // Preload all card images
        cards.forEach(card => {
            const img = new Image()
            img.src = card.image
        })
    }, [])

    const cards = [
        {
            image: '/resources/MH_N.webp',
            title: `money heist`,
            description: `A criminal mastermind known as "The Professor" recruits eight people with unique abilities to carry out an ambitious plan to rob the Royal Mint of Spain. As the team takes hostages and locks themselves inside, they engage in a battle of wits with the police while printing billions of euros. The heist becomes more complicated as personal relationships develop, loyalties are tested, and the team must deal with both external threats and internal conflicts. This thrilling Spanish crime drama combines intense action with complex character development and unexpected twists.`
        },
        
        {
            image: '/resources/AIB_N.jpg',
            title: `alice in borderland`,
            description: `In a mysteriously deserted Tokyo, Arisu and his friends find themselves forced to compete in dangerous games to survive. Each game tests their physical and psychological limits, with death as the price of failure. As they uncover the truth behind this parallel world called the Borderland, they must use their wits and form alliances while facing increasingly deadly challenges. The stakes escalate as they search for a way back home, discovering that survival means more than just winning games.`
        },
        {
            image: '/resources/ST_N.webp',
            title: `stranger things`,
            description: `In the 1980s small town of Hawkins, Indiana, a group of kids discover supernatural forces, government conspiracies, and a mysterious girl with psychokinetic powers after their friend Will disappears. As they investigate, they uncover a dangerous alternate dimension called the Upside Down, home to terrifying monsters threatening their world. Together with Will's mother Joyce, police chief Hopper, and their teenage siblings, they must face increasingly dangerous threats while navigating friendship, first love, and growing up in this nostalgic sci-fi horror series.`
        },
        {
            image: '/resources/SG_N.webp',
            title: `squid game`,
            description: `A group of people are forced to play a series of deadly games to survive. The games are designed to test their physical and psychological limits, with death as the price of failure. As they navigate these deadly challenges, they must use their wits and form alliances while facing increasingly dangerous threats.`
        },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Create context to ensure proper cleanup
        const ctx = gsap.context(() => {

            // Card animations
            cards.forEach((card, index) => {
                ScrollTrigger.create({
                    trigger: rightContainerRef.current?.children[index],
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {
                        gsap.to(imageRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: () => {
                                setCurrentImage(card.image)
                                gsap.to(imageRef.current, {
                                    opacity: 1,
                                    duration: 0.3
                                })
                            }
                        })
                    },
                    onEnterBack: () => {
                        gsap.to(imageRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: () => {
                                setCurrentImage(card.image)
                                gsap.to(imageRef.current, {
                                    opacity: 1,
                                    duration: 0.3
                                })
                            }
                        })
                    }
                });
            });
        });

        // Cleanup function
        return () => {
            // Kill all animations and ScrollTriggers created in this component
            ctx.revert();
            
            // Additional cleanup to ensure all ScrollTriggers are killed
            ScrollTrigger.getAll().forEach(st => st.kill());
            
            // Kill any remaining GSAP animations
            gsap.killTweensOf([imageRef.current]);
        };
    }, []);

    return (    
        <div className='w-full min-h-screen bg-black relative flex flex-col md:flex-row'>
            <div className="left w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center">
                <h1 className='text-white text-2xl md:text-4xl font-bold absolute top-5 md:top-10 left-5 md:left-10'>Some trending shows</h1>
                <img
                    ref={imageRef}
                    src={currentImage}
                    alt="Preview Image"
                    className='w-full h-full md:w-[70%] md:h-[70%] object-cover md:border-2 md:border-white'
                />
            </div>
            <div className="right w-full md:w-1/2 z-1" ref={rightContainerRef}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card h-[100vh] flex items-center justify-center bg-black/50 md:bg-black flex-col text-center px-4 z-10`}
                    >
                        <h1 className='text-white text-2xl md:text-4xl font-bold uppercase'>{card.title}</h1>
                        <p className='text-white text-xs md:text-sm mt-2 max-w-[90%] md:max-w-[80%]'>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home_card
import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
const Home_last = () => {
    const parentRef = useRef(null)
    const titleRef = useRef(null)
    useEffect(() => {
        const contextSafe = gsap.context(() => {
            gsap.to(titleRef.current, {
                scale: 15,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: 'top top',
                    end: '+=1000',
                    scrub: true,
                }
            })
        })

        return () => {
            contextSafe.revert()
        }
    }, [])
    return (
        <div ref={parentRef} className='h-[150vh] w-full bg-black relative flex items-center justify-center overflow-hidden'>
            <h1 ref={titleRef} className='text-white mb-[40vh] text-2xl md:text-4xl font-bold'>this is just a trailer</h1>
        </div>
    )
}

export default Home_last
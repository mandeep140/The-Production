import React from 'react'
import { BiSolidError } from 'react-icons/bi'
import Transition from '../utils/Transition'
const Home_lander = () => {
    return (
        <div className='w-full h-screen sticky top-0'>
            <div className='absolute inset-0 bg-[url("/resources/MH_N.webp")] bg-cover bg-center bg-no-repeat opacity-10'></div>
            <div className='relative flex flex-col items-center justify-center h-screen px-4'>
                    <h1 className='text-white text-2xl md:text-4xl uppercase font-bold text-center'>content you never seen before</h1>
                <p className='flex items-center gap-2 mt-3 text-sm md:text-base text-center max-w-[90%] md:max-w-full'>
                    <BiSolidError className="w-4 h-4 md:w-6 md:h-6 text-white flex-shrink-0" />
                    This is just an imagination idea, content on this site was owned by NETFLIX
                </p>
            </div>
        </div>
    )
}

export default Transition(Home_lander)
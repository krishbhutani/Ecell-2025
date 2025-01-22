import React, { useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const FrequentlyAsked = () => {
    const [active,setActive] = useState(false)


    return (
        <div className='text-white flex flex-col gap-6 mb-10 '>
            {data.map((item, i) => (
                <div className='mx-[15vw] backdrop-blur-md bg-cyan-300/10 rounded-md px-6 py-5 border-[1px] border-white'>
                <div className='flex justify-between items-center cursor-pointer' onClick={()=> setActive(!active)}>
                    <div className='pb-4 text-xl font-semibold'>{item.question}</div>
                    <div className='text-3xl font-semibold'>{active? <IoIosArrowUp/>:<IoIosArrowDown/> }</div>
                    
                </div>
                <div >{active && <p>{item.answer}</p>}</div>
                
                </div>

            ))}
            
        </div>
    )
}



export default FrequentlyAsked


const data = [
    {
        question: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },
]

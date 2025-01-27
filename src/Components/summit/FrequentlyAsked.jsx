import React, { useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const FrequentlyAsked = () => {
    const [active,setActive] = useState(null)

    const toggle = (i) =>{
        if(active == i){
            return setActive(null)
        }

        setActive(i)
    }


    return (
        <div className='text-white flex flex-col gap-6 mb-10 '>
            {data.map((item, i) => (
                <div className='mx-[15vw]  backdrop-blur-md bg-cyan-300/10 rounded-md px-6 py-5 border-[1px] border-white'>
                <div className='flex md:justify-between   items-center   cursor-pointer' onClick={()=> toggle(i)}>
                    <div className='pb-2 md:text-xl font-semibold'>{item.question}</div>
                    <div className=' md:text-3xl md:block hidden font-semibold '>{active ==i ? <IoIosArrowUp/>:<IoIosArrowDown/> }</div>
                    
                    
                </div>
                
                
                <div className={ `${active==i ? "block" : "hidden"  }`}>
                <div className='my-3  w-full h-px bg-white '></div>
                    {item.answer}</div>
                </div>

            ))}
            
        </div>
    )
}



export default FrequentlyAsked


const data = [
    {
        question: "Pending Work Of Khushi",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to oll, the pulsating heart of innovation and entrepreneurship on campus. ",
        answer: "Welcome to  E-Cell,he pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the  innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to our E-Cell, the pulsn and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },

    {
        question: "Welcome to o innovation and entrepreneurship on campus. ",
        answer: "Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. "
    },
]

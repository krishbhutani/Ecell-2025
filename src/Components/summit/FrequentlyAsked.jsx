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
        question: "What is the E-Summit?",
        answer: "The E-Summit is an annual entrepreneurship summit organized by NIT Hamirpur, aimed at fostering innovation, creativity, and entrepreneurial spirit among students, professionals, and startups. The event features keynote speeches, panel discussions, workshops, competitions, and networking opportunities."
    },

    {
        question: "When and where is the E-Summit being held?",
        answer: "The E-Summit is being held on [insert dates] at the National Institute of Technology (NIT) Hamirpur campus. Specific venues for different events will be shared in the schedule."
    },

    {
        question: "Who can attend the E-Summit?",
        answer: "The E-Summit is open to students, entrepreneurs, professionals, startups, and anyone interested in entrepreneurship and innovation. Registration is mandatory for participation."
    },

    {
        question: "How can I register for the E-Summit?",
        answer: "You can register for the E-Summit through the official website [insert link] or on-site registration (if available). Early registration is recommended as seats are limited."
    },

    {
        question: "Is there a registration fee?",
        answer: "Yes, there is a nominal registration fee for participants. The fee structure varies for students, professionals, and startups. Check the official website for detailed pricing."
    },

    {
        question: "What are the key events at the E-Summit?",
        answer: "The E-Summit includes Keynote speeches by industry leaders, Panel discussions on trending topics, Workshops and masterclasses, Startup pitch competitions, Networking sessions, Exhibitions and showcases"
    },

    {
        question: "Can I participate in the startup pitch competition?",
        answer: "Yes, if you have a startup idea or an existing startup, you can participate in the pitch competition. Register online and submit your proposal before the deadline. Selected teams will be invited to pitch at the event."
    },


    {
        question: "Are there any prizes for competitions?",
        answer: "Yes, there are exciting prizes, mentorship opportunities, and incubation support for winners of various competitions, including the startup pitch competition."
    },


    {
        question: "Will there be networking opportunities?",
        answer: "Absolutely! The E-Summit provides ample networking opportunities with industry experts, investors, mentors, and fellow entrepreneurs."
    },

    {
        question: "Can I volunteer for the E-Summit?",
        answer: "Yes, we welcome volunteers to help organize and manage the event. You can apply to be a volunteer through the official website."
    },

    {
        question: "Is accommodation available for outstation participants?",
        answer: "Limited accommodation may be available on a first-come, first-served basis. Please contact the organizing team for details."
    },

    {
        question: "How can I sponsor or partner with the E-Summit?",
        answer: "For sponsorship or partnership opportunities, please reach out to the organizing team at [insert email address]."
    },


    {
        question: "Where can I find the schedule for the E-Summit?",
        answer: "The detailed schedule will be available on the official website and the event app (if applicable)."
    },

    {
        question: "Who should I contact for further queries?",
        answer: "For any questions or concerns, please email us at [insert email address] or call [insert phone number]."
    },

    
]

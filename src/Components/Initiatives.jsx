import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Initiatives = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}



                className='w-full pt-5 sm:px-20 px-10'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Initiatives</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-4/12 font-medium font-title text-slate-500 mt-5'>
                    Discover the transformative initiatives by E-Cell NIT
                    Hamirpur, empowering aspiring entrepreneurs with the resources and guidance to bring their visions to life.
                </div>


                <div className='flex flex-wrap justify-center lg:gap-6 gap-4 my-7'>
                    {
                        data.map((item) => (

                            <div className='relative h-80 w-[275px] rounded-lg border-black border-4 bg-black overflow-hidden'>
                                <div className='p-2  bg-[#310742] w-full h-full  rounded-lg flex flex-col items-center top-0'>
                                    <div className='flex justify-center font-bold sm:text-3xl text-xl text-white sm:mb-2 mb-1'>{item.heading}</div>
                                    <p className=' text-white  sm:font-medium font-light sm:mb-4 mb-2  sm:text-center'>{item.info}</p>

                                    <button type="button" className="text-black mt-4 sm:mt-0  bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                        <Link to={item.link}>Explore</Link>
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>

                                <img className='absolute h-full hover:opacity-0 duration-1000 card overflow-hidden object-cover rounded-lg top-0' src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </motion.div >

            <div className='flex lg:flex-row flex-col lg:px-0 px-6 items-center lg:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl md:text-2xl lg:text-3xl mr-3'>Wanna see how people react to our posts on <span className='text-yellow-300'>linkedin</span>
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 lg:mt-0 bg-white hover:bg-zinc-400 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/">Click here</Link>
                        <svg class="hidden rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Initiatives


const data = [
    {
        img: `${assets.E_summit}`,
        heading: "E-Summit",
        info: "E-Summit is where innovation meets opportunity! Attendees connect with industry leaders, participate in workshops, and pitch startups to investors, making it ideal for budding entrepreneurs.",
        link: "/summit"
    },

    {
        img: `${assets.Crescendo}`,
        heading: "E-Crescendo",
        info: "Ecresendo is a vibrant platform where the young entrepreneurs prove their metal by pitching their extraordinary ideas thereby laying a foundation for upholding their vision. Join us to experience the thrill.",
        link: "https://e-crescendo.vercel.app"
    },

    {
        img: `${assets.Hult}`,
        heading: "Hult Prize",
        info: "The Hult Prize Campus Program at NIT Hamirpur invites students to develop innovative solutions for global issues, offering mentorship, competition, and seed funding for impactful ventures.",
        link: "https://ecell-hult-e.vercel.app"
    },

    {
        img: `${assets.SIP}`,
        heading: "SIP",
        info: "The Startup Internship Program provides students hands-on experience, mentorship, and real-world exposure in startups, bridging academics and entrepreneurship while fostering creativity and professional growth.",
        link: "/coming"
    }
]

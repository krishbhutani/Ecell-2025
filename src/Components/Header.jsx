import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
import Particle from './Particle'

const Header = () => {
    return (
        <>
        <div className='relative w-full bg-[#F3F2E3] h-max pb-12 md:pb-24 lg:pb-32'>

            

            <div className='flex pt-6 lg:pt-16 xl:pt-28 lg:pl-32 md:pl-20 sm:pl-7 pl-5 px-2  sm:px-0'>
                <motion.div

                    initial={{ opacity: 0, translateY: "20%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}


                    className=' w-full md:w-7/12 m-auto'>
                    <div className='hidden lg:block pb-5 text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-transparent bg-gradient-to-r from-slate-500 via-purple-500 to-stone-500 bg-clip-text' >Entrepreneurship Cell</div>
                    <div className='lg:hidden block pb-3 text-5xl  font-extrabold text-transparent bg-gradient-to-r from-slate-500 via-purple-500 to-stone-500 bg-clip-text'>E-Cell</div>
                    <div className='pb-2 text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-transparent bg-gradient-to-r from-slate-500 via-purple-500 to-stone-500 bg-clip-text'>NIT Hamirpur</div>

                    <motion.div
                        initial={{ opacity: 0, translateY: "40%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}

                        className='md:hidden w-auto'>
                        <img className='w-9/12' src={assets.Header_img} alt="" />
                    </motion.div>


                    <div className='text-xl font-bold'>INSPIRING THE ENTREPRENEUR IN YOU</div>
                    <div className='pt-3 pb-4'>
                        Dare to awaken the leader within you. Embrace the art of technical innovation, where dedication and commitment pave the way to success. If you're ready to innovate, collaborate, and lead the future, the E-Cell is your ultimate destination.
                    </div>
                    <Link to="/coming"><button className=' text-white bg-[#310742] hover:bg-[#310756]/90 focus:ring-4 focus:outline-none focus:ring-[#310743]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2'>Dig deeper about E-cell NITH</button></Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: "40%" }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}

                    className='hidden md:block w-5/12 py-14'>
                    <img className='w-10/12' src={assets.Header_img} alt="" />
                </motion.div>
            </div>

        </div>
        </>

    )
}

export default Header

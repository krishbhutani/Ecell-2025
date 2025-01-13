import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div>
                <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>

                    <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                        <span className='text-slate-500'>Who</span><span>We Are</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                    <div  className='sm:flex mb-7'>
                        <div className='w-full'>
                            <div className='sm:w-11/12 font-medium font-title text-slate-500'>
                                At NIT Hamirpur, the entrepreneurial journey begins with
                                E-Cell- a vibrant hub dedicated to sparking a lasting legacy of innovation and brilliance. Our mission is to fuel creativity, inspire leadership, and ignite the entrepreneurial spark within students, transforming ambitious ideas into game changing ventures. With a thriving ecosystem of hands-on learning, expert mentorship, and invaluable networking, we prepare the next generation to conquer the entrepreneurial world. From immersive workshops and dynamic speaker series to adrenaline-packed hackathons and startup challenges, we plunge students into a world of real-world innovation.
                            </div>
                            <div className='mt-6 sm:w-11/12 font-medium font-title text-slate-500'>
                                E-Cell NIT Hamirpur is more than a society; it's a launchpad for dreamers, doers, and disruptors, committed to continuing a legacy of entrepreneurial brilliance that shapes the future.
                            </div>

                        </div>

                        <div className='box-content w-full sm:w-9/12 border-4 sm:mt-0 mt-8 border-gray-600 shadow-blue-900 shadow-2xl'>
                            <img className='object-fit' src={assets.About1} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#F3F2E3] sm:px-28 px-8 sm:py-16 py-10'>
            <div className='flex sm:flex-row flex-col'>
                <div>
                    <img className="w-full" src={assets.Footer_logo} alt="" />

                    <div className='flex items-center gap-2 sm:gap-4'>
                        <img className='h-12 w-auto'  src={assets.linkedin_logo} alt="" />
                        <img className='h-12 w-auto'  src={assets.insta_logo} alt="" />
                        <img className='h-8 w-auto'  src={assets.X_logo} alt="" />
                        <img className='h-12 w-auto'  src={assets.yt_logo} alt="" />
                    </div>
                </div>
                <div className='flex flex-row  sm:pl-72 pl-0 sm:gap-14 gap-7 sm:mt-0 mt-5 '>
                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Links</div>

                        <ul className='flex flex-col sm:gap-2 gap-0'>
                            <a className='sm:text-xl text-lg' href="#">HOME</a>
                            <a className='sm:text-xl text-lg' target="_blank" href="https://nith.ac.in/">NITH</a>
                            <a className='sm:text-xl text-lg' href="#">About Us</a>
                            <a className='sm:text-xl text-lg' href="#Team">Our Team</a>
                            <a className='sm:text-xl text-lg' href="#">FAQs</a>

                        </ul>

                    </div>

                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Our Initiatives</div>

                        <ul className='flex flex-col sm:gap-2 gap-0'>
                            <a className='sm:text-xl text-lg' href="#">E-Summit</a>
                            <a className='sm:text-xl text-lg' href="#">SIP</a>
                            <a className='sm:text-xl text-lg' href="#">HULT Prize</a>
                            <a className='sm:text-xl text-lg' href="https://e-crescendo.vercel.app">E-Crescendo</a>

                        </ul>

                    </div>
                </div>
            </div>

           
                <div className='mt-5 sm:text-8xl text-3xl font-extrabold text-[#4BA3E9]'>
                Entrepreneurship Cell
                </div>
                
        
        </div>
    )
}

export default Footer

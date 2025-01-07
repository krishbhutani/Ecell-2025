import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#F3F2E3] hello px-28 py-16'>
            <div className='flex'>
                <div>
                    <img className="w-5/6" src={assets.Footer_logo} alt="" />

                    <div className='flex items-center gap-2 sm:gap-4'>
                        <img className='h-12 w-auto'  src={assets.linkedin_logo} alt="" />
                        <img className='h-12 w-auto'  src={assets.insta_logo} alt="" />
                        <img className='h-8 w-auto'  src={assets.X_logo} alt="" />
                        <img className='h-12 w-auto'  src={assets.yt_logo} alt="" />
                    </div>
                </div>
                <div className='flex pl-72 gap-14'>
                    <div>
                        <div className='font-medium text-xl mb-4'>Links</div>

                        <ul className='flex flex-col gap-2'>
                            <a className='text-xl' href="#">HOME</a>
                            <a className='text-xl' target="_blank" href="https://nith.ac.in/">NITH</a>
                            <a className='text-xl' href="#">About Us</a>
                            <a className='text-xl' href="#Team">Our Team</a>
                            <a className='text-xl' href="#">FAQs</a>

                        </ul>

                    </div>

                    <div>
                        <div className='font-medium text-xl mb-4'>Our Initiatives</div>

                        <ul className='flex flex-col gap-2'>
                            <a className='text-xl' href="#">E-Summit</a>
                            <a className='text-xl' href="#">SIP</a>
                            <a className='text-xl' href="#">HULT Prize</a>
                            <a className='text-xl' href="https://e-crescendo.vercel.app">E-Crescendo</a>

                        </ul>

                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <span className='sm:text-9xl text-5xl font-extrabold text-[#4BA3E9]'>Entrepreneurship</span>
                <span className='sm:text-9xl text-5xl font-extrabold ml-10 text-[#4BA3E9]' >Cell</span>
            </div>
        </div>
    )
}

export default Footer

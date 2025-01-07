import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className=' top-0 left-0 w-full z-10'>
            <div className='container flex justify-between items-center max-w-full py-3 px-6 md:px-16 lg:px-18 bg-[#310742]'>
                <div className= 'flex justify-center items-center gap-2 sm:gap-5'>
                    <img className="hidden sm:block h-12 sm:h-20" src={assets.NITH_logo} alt="NITH Logo" />
                    <img className="h-10 sm:h-14" src={assets.Ecell_logo} alt="Ecell Logo" />
                </div>

                <div>
                    <ul className='hidden md:flex gap-7 text-white'>
                        <a href="#" className='cursor-pointer text-white'>About Us</a>
                        <a href="#" className='cursor-pointer text-white'>Our Team</a>
                        <a href="#" className='cursor-pointer text-white'>FAQs</a>
                        <a href="#" className='cursor-pointer text-white'>Contact Us</a>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar

import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='sticky top-0 left-0 w-full z-10'>
            <div className='container flex justify-between items-center max-w-full py-3 px-6 md:px-16 lg:px-18 bg-[#310742]'>
                <div className= 'flex justify-center items-center gap-2 sm:gap-5'>
                    <img className="hidden sm:block h-12 sm:h-20" src={assets.NITH_logo} alt="NITH Logo" />
                    <img className="h-10 sm:h-14" src={assets.Ecell_logo} alt="Ecell Logo" />
                </div>

                <div>
                    <ul className='hidden md:flex gap-7 text-white'>
                        <Link to='/' className='cursor-pointer text-white'>Home</Link>
                        <Link to='/about' className='cursor-pointer text-white'>About Us</Link>
                        <Link to='/team' className='cursor-pointer text-white'>Our Team</Link>
                        <Link to='/alumni' className='cursor-pointer text-white'>Our Alumni</Link>
                        <Link to='contact' className='cursor-pointer text-white'>Contact Us</Link>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar

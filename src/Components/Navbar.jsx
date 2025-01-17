import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }

        else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[setShowMobileMenu])

    return (
        <div className='sticky top-0 left-0 w-full z-10'>
            <div className='container flex justify-between items-center max-w-full py-3 px-6 md:px-16 lg:px-18 bg-[#310742]'>
                <div className= 'flex justify-center items-center gap-2 sm:gap-5'>
                    <Link to="/"><img className="hidden h-12 cursor-pointer sm:h-20" src={assets.NITH_logo} alt="NITH Logo" /></Link>
                    <Link to="/"><img className="h-10 cursor-pointer sm:h-14" src={assets.Ecell_logo} alt="Ecell Logo" /></Link>
                </div>

                <div>
                    <ul className='hidden lg:flex gap-7 text-white'>
                        <Link to='/' className='cursor-pointer text-white'>Home</Link>
                        <Link to='/about' className='cursor-pointer text-white'>About Us</Link>
                        <Link to='/team' className='cursor-pointer text-white'>Our Team</Link>
                        <Link to='/alumni' className='cursor-pointer text-white'>Our Alumni</Link>
                        <Link to='/contact' className='cursor-pointer text-white'>Contact Us</Link>

                    </ul>
                </div>

                <img onClick={()=> setShowMobileMenu(true)} className='lg:hidden h-12 cursor-pointer' src={assets.toggle_menu} alt="" />
            </div>

            <div className={`lg:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} bg-white  right-0 top-0 bottom-0 overflow-hidden transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'><img onClick={()=> setShowMobileMenu(false)} className='w-8' src={assets.Cross_icon} alt="" /></div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <Link onClick={()=> setShowMobileMenu(false)} to='/' className='cursor-pointer text-black'>Home</Link>
                        <Link onClick={()=> setShowMobileMenu(false)} to='/about' className='cursor-pointer text-black'>About Us</Link>
                        <Link onClick={()=> setShowMobileMenu(false)} to='/team' className='cursor-pointer text-black'>Our Team</Link>
                        <Link onClick={()=> setShowMobileMenu(false)} to='/alumni' className='cursor-pointer text-black'>Our Alumni</Link>
                        <Link onClick={()=> setShowMobileMenu(false)} to='/contact' className='cursor-pointer text-black'>Contact Us</Link>

                    </ul>
            </div>

        </div>
    )
}

export default Navbar

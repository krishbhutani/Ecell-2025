import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='w-full h-px bg-black'></div>
        <div className='bg-[#F3F2E3] sm:px-28 px-8 sm:py-16 py-10'>
            
            <div className='flex sm:flex-row flex-col'>
                <div>
                    <Link to='/'><img className="w-full cursor-pointer" src={assets.Footer_logo} alt="" /></Link>

                    <div className='flex items-center gap-2 sm:gap-4'>
                       <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/"><img className='h-12 w-auto cursor-pointer'  src={assets.linkedin_logo} alt="" /></Link> 
                        <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr"><img className='cursor-pointer h-12 w-auto'  src={assets.insta_logo} alt="" /></Link>
                        <Link to='/coming'><img className='cursor-pointer h-8 w-auto'  src={assets.X_logo} alt="" /></Link>
                        <Link to='/coming'><img className='cursor-pointer h-12 w-auto'  src={assets.yt_logo} alt="" /></Link>
                    </div>
                </div>
                <div className='flex flex-row  sm:pl-72 pl-0 sm:gap-14 gap-7 sm:mt-0 mt-5 '>
                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Links</div>

                        <ul className='flex flex-col sm:gap-2 gap-0'>
                            <Link className='sm:text-xl text-lg' to="/">HOME</Link>
                            <Link className='sm:text-xl text-lg' target="_blank" to="https://nith.ac.in/">NITH</Link>
                            <Link className='sm:text-xl text-lg' to="/about">About Us</Link>
                            <Link className='sm:text-xl text-lg' to="/team">Our Team</Link>
                            <Link className='sm:text-xl text-lg' to="/coming">FAQs</Link>
                        </ul>

                    </div>

                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Our Initiatives</div>

                        <ul className='flex flex-col sm:gap-2 gap-0'>
                        
                        <Link className='sm:text-xl text-lg' to="https://e-crescendo.vercel.app">E-Crescendo</Link>
                        <Link className='sm:text-xl text-lg' to="https://ecell-hult-e.vercel.app">HULT Prize</Link>
                        <Link className='sm:text-xl text-lg' to="/coming">E-Summit</Link>
                        <Link className='sm:text-xl text-lg' to="/coming">SIP</Link>

                            

                        </ul>

                    </div>
                </div>
            </div>

           
                
                
        
        </div>
        </div>
    )
}

export default Footer

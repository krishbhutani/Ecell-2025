import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <div className='w-full h-px bg-white'></div>

            <div className='w-full text-white bg-black px-7 py-7 gap-4 flex flex-wrap lg:justify-between justify-start'>

                <div>
                    <div className='flex'>
                        <img className='border-r-2 border-white sm:h-36 h-24' src={assets.Summit_footer} alt="" />
                        <div className='pl-2 flex flex-col justify-evenly'>
                            <div className='sm:text-4xl text-2xl font-bold'>Entrepreneurship</div>
                            <div className='sm:text-4xl text-2xl font-bold'>Cell</div>
                            <div className='sm:text-3xl text-xl font-semibold'>NIT Hamirpur</div>
                        </div>
                    </div>
                    <div className='mt-4 pl-10 lg:w-[650px] md:w-96 '>A vibrant hub dedicated to sparking a lasting legacy of innovation and brilliance. Our mission is to fuel creativity, inspire leadership, and ignite the entrepreneurial spark within students, transforming ambitious ideas into game-changing ventures.
                    With a thriving ecosystem of hands-on learning, expert mentorship, and invaluable networking, we prepare the next generation to conquer the entrepreneurial world. From immersive workshops and dynamic speaker series to adrenaline-packed hackathons and startup challenges, we plunge students into a world of real-world innovation.</div>
                    <div className='flex gap-2 mt-4 ml-10 text-2xl text-black py-2  bg-[#FEA15E] w-48 justify-around rounded-md'>
                        <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr"><FaInstagram /></Link>
                        <Link><FaXTwitter /></Link>
                        <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/"><CiLinkedin /></Link>
                        <Link to="https://m.facebook.com/@eclubnith/?hr=1"><FaFacebookSquare /></Link>
                    </div>
                </div>

                <div className='flex  sm:gap-20 gap-10 lg:mr-6 ml-10 lg:ml-0'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium'>Quick Links</p>
                        <Link to="/summit">Home</Link>
                        <Link to="/">E-Cell</Link>
                        <Link to="https://nith.ac.in/">NITH</Link>
                        <Link to="/contact">📧 CONTACT</Link>
                        <button className='bg-[#FEA15E] text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit/passes'>Passes</Link></button>
                    </div>

                    <div className='flex flex-col gap-2 text-center'>
                        <p className='font-medium'>Contact Us</p>
                        <p>ecell@nith.ac.in</p>
                        <p>+91-8275451335</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center  items-end text-white font-semibold sm:text-base text-xs pb-2'>©2025 ECELL NIT HAMIRPUR. All Rights Reserved.</div>
        </div>
    )
}

export default Footer

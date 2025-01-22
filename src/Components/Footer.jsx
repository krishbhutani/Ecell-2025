import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#F3F2E3] h-auto '>
            <div className='w-full  h-px bg-black'></div>
            <div className='flex flex-wrap justify-around gap-10'>
                <div>
                    <div className='mt-4  flex   px-5'>
                        <div className='flex items-center'>
                        <Link to='/'><img className=" sm:w-96 w-auto  py-5 cursor-pointer" src={assets.Footer_logo} alt="" /></Link>
                        </div>
                        <div className='sm:pl-3   flex flex-col justify-center border-l-4 border-stone-950'>
                            <p className='sm:font-bold font-medium'>THE</p>
                            <p className='sm:font-bold font-medium'>ENTREPRENEURSHIP</p>
                            <p className='sm:font-bold font-medium'>CELL</p>
                            <p>NIT HAMIRPUR</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center gap-7 mt-4 px-5 '>
                    <div className='flex justify-around gap-20'>
                    <div>
                        <div className='font-medium md:text-xl text-lg  '>INITIATIVES</div>
                        <ul className='flex flex-col md:gap-1 gap-0'>
                            <Link className='sm:text-base text-base' to="https://e-crescendo.vercel.app">E-CRESCENDO</Link>
                            <Link className='sm:text-base text-base' to="https://ecell-hult-e.vercel.app">HULT PRIZE</Link>
                            <Link className='sm:text-base text-base' to="/Summit">E-SUMMIT</Link>
                            <Link className='sm:text-base text-base' to="/coming">SIP</Link>
                        </ul>
                    </div>
                    <div>
                        <div className='font-medium md:text-xl text-lg'>LINKS</div>
                        <ul className='flex flex-col sm:gap-1 gap-0'>
                            <Link className='sm:text-base text-base' to="/">HOME</Link>
                            <Link className='sm:text-base text-base' target="_blank" to="https://nith.ac.in/">NITH</Link>
                            <Link className='sm:text-base text-base' to="/about">ABOUT US</Link>
                            <Link className='sm:text-base text-base' to="/team">OUR TEAM</Link>
                            <Link className='sm:text-base text-base' to="/coming">FAQs</Link>
                        </ul>
                    </div>
                    </div>
                    <div className=''>
                        <div className='font-medium md:text-xl text-lg sm:mb-2 '>CONTACT</div>
                        <div>
                            <p className='text-base mb-1'> 📍STUDENT ACTIVITY CENTER,NIT</p>
                            <p className='text-base mb-1'>HIMACHAL PRADESH 177005</p>
                            <Link to="/contact" className='text-base '>📧 CONTACT</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-wrap-reverse  sm:justify-between justify-center items-center sm:gap-10 gap-4 px-10 mt-16'>
                <div className='flex items-end font-semibold sm:text-base text-xs'>©2025 ECELL NIT HAMIRPUR. All Rights Reserved.</div>

                <div className='flex items-center  gap-2 sm:gap-4'>
                    <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/" target='_blank'><img className='h-9 w-auto cursor-pointer' src={assets.linkedin_logo} alt="" /></Link>
                    <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr" target='_blank'><img className='cursor-pointer h-10 w-auto' src={assets.insta_logo} alt="" /></Link>
                    <Link to='/contact'><img className='cursor-pointer h-11 w-auto' src={assets.mail_logo} alt="" /></Link>
                    <Link to='/coming'><img className='cursor-pointer h-11 w-auto' src={assets.yt_logo} alt="" /></Link>
                </div>


            </div>
        </div>










        // <div>
        //     <div className='w-full h-px bg-black'></div>
        // <div className='bg-[#F3F2E3] sm:px-28 px-8 sm:py-16 py-10'>

        //     <div className='flex sm:flex-row flex-col'>
        //         <div>
        //             <Link to='/'><img className="w-full cursor-pointer" src={assets.Footer_logo} alt="" /></Link>

        //             <div className='flex items-center gap-2 sm:gap-4'>
        //                 <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/"><img className='h-12 w-auto cursor-pointer'  src={assets.linkedin_logo} alt="" /></Link> 
        //                 <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr"><img className='cursor-pointer h-12 w-auto'  src={assets.insta_logo} alt="" /></Link>
        //                 <Link to='/coming'><img className='cursor-pointer h-8 w-auto'  src={assets.X_logo} alt="" /></Link>
        //                 <Link to='/coming'><img className='cursor-pointer h-12 w-auto'  src={assets.yt_logo} alt="" /></Link>
        //             </div>
        //         </div>
        //         <div className='flex flex-row  sm:pl-72 pl-0 sm:gap-14 gap-7 sm:mt-0 mt-5 '>
        //             <div>
        //                 <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Links</div>

        // <ul className='flex flex-col sm:gap-2 gap-0'>
        //     <Link className='sm:text-xl text-lg' to="/">HOME</Link>
        //     <Link className='sm:text-xl text-lg' target="_blank" to="https://nith.ac.in/">NITH</Link>
        //     <Link className='sm:text-xl text-lg' to="/about">About Us</Link>
        //     <Link className='sm:text-xl text-lg' to="/team">Our Team</Link>
        //     <Link className='sm:text-xl text-lg' to="/coming">FAQs</Link>
        // </ul>

        //             </div>

        //             <div>
        //                 <div className='font-medium sm:text-xl text-lg sm:mb-4 mb-2'>Our Initiatives</div>

        //                 <ul className='flex flex-col sm:gap-2 gap-0'>

        //                 <Link className='sm:text-xl text-lg' to="https://e-crescendo.vercel.app">E-Crescendo</Link>
        //                 <Link className='sm:text-xl text-lg' to="https://ecell-hult-e.vercel.app">HULT Prize</Link>
        //                 <Link className='sm:text-xl text-lg' to="/coming">E-Summit</Link>
        //                 <Link className='sm:text-xl text-lg' to="/coming">SIP</Link>



        //                 </ul>

        //             </div>
        //         </div>
        //     </div>





        // </div>
        // </div>
    )
}

export default Footer

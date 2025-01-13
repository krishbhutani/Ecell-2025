import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#F3F2E3] h-auto sm:h-80'>
            <div className='w-full  h-px bg-black'></div>
            <div className='sm:flex justify-between'>
                <div>
                    <div className='mt-4 flex px-5'>
                        <Link to='/'><img className="border-r-4 border-stone-950 w-96 sm:pl-40 sm:pt-14 py-5 cursor-pointer" src={assets.Footer_logo} alt="" /></Link>
                        <div className='pl-3 sm:pt-6 pt-2'>
                            <p className='font-bold'>THE</p>
                            <p className='font-bold'>ENTREPRENEURSHIP</p>
                            <p className='font-bold'>CELL</p>
                            <p>NIT HAMIRPUR</p>
                        </div>
                    </div>
                </div>

                <div className='sm:flex sm:justify-between mt-7 sm:px-11 px-5'>
                    <div className='flex justify-around'>
                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-2  sm:pr-32 pr-10'>INITIATIVES</div>
                        <ul className='flex flex-col sm:gap-1 gap-0'>
                            <Link className='sm:text-base text-base' to="https://e-crescendo.vercel.app">E-CRESCENDO</Link>
                            <Link className='sm:text-base text-base' to="https://ecell-hult-e.vercel.app">HULT PRIZE</Link>
                            <Link className='sm:text-base text-base' to="/coming">E-SUMMIT</Link>
                            <Link className='sm:text-base text-base' to="/coming">SIP</Link>
                        </ul>
                    </div>
                    <div>
                        <div className='font-medium sm:text-xl text-lg sm:mb-2  sm:pr-32 pr-10'>LINKS</div>
                        <ul className='flex flex-col sm:gap-1 gap-0'>
                            <Link className='sm:text-base text-base' to="/">HOME</Link>
                            <Link className='sm:text-base text-base' target="_blank" to="https://nith.ac.in/">NITH</Link>
                            <Link className='sm:text-base text-base' to="/about">ABOUT US</Link>
                            <Link className='sm:text-base text-base' to="/team">OUR TEAM</Link>
                            <Link className='sm:text-base text-base' to="/coming">FAQs</Link>
                        </ul>
                    </div>
                    </div>
                    <div className='sm:mt-0  mt-10 sm:px-0 px-10'>
                        <div className='font-medium sm:text-xl text-lg sm:mb-2 '>CONTACT</div>
                        <div>
                            <p className='text-base mb-1'> 📍 STUDENT ACTIVITY CENTER, NIT</p>
                            <p className='text-base mb-1'>HIMACHAL PRADESH 177005</p>
                            <Link to="/contact" className='text-base '>📧 CONTACT</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sm:flex justify-between px-10 mt-16'>
                <div className='mt-5 font-semibold'>©2025 ECELL NIT HAMIRPUR. All Rights Reserved.</div>

                <div className='flex items-center gap-2 sm:gap-4'>
                    <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/" target='_blank'><img className='h-10 w-auto cursor-pointer' src={assets.linkedin_logo} alt="" /></Link>
                    <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr" target='_blank'><img className='cursor-pointer h-10 w-auto' src={assets.insta_logo} alt="" /></Link>
                    <Link to='/contact'><img className='cursor-pointer h-10 w-auto' src={assets.mail_logo} alt="" /></Link>
                    <Link to='/coming'><img className='cursor-pointer h-10 w-auto' src={assets.yt_logo} alt="" /></Link>
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

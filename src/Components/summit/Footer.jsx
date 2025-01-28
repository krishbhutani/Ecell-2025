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
                    <div className='mt-4 pl-10 lg:w-[650px] md:w-96 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quae recusandae placeat voluptatem, earum sapiente at repudiandae sequi itaque eos odio facilis perferendis totam reiciendis, accusamus fuga debitis ratione possimus dolores! Animi, optio beatae modi iure debitis enim. Nam voluptas possimus deserunt magnam maiores impedit quisquam. Veniam!</div>
                    <div className='flex gap-2 mt-4 ml-10 text-2xl text-black py-2  bg-[#FEA15E] w-48 justify-around rounded-md'>
                        <Link><FaInstagram /></Link>
                        <Link><FaXTwitter /></Link>
                        <Link><CiLinkedin /></Link>
                        <Link><FaFacebookSquare /></Link>
                    </div>
                </div>

                <div className='flex  sm:gap-20 gap-10 lg:mr-6 ml-10 lg:ml-0'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium'>Quick Links</p>
                        <Link>Home</Link>
                        <Link>Highlights</Link>
                        <Link>Gallery</Link>
                        <Link>Guest</Link>
                        <Link>Organizers</Link>
                        <button className='bg-[#FEA15E] text-black font-medium text-base px-4 py-1 rounded-sm '>Passes</button>
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

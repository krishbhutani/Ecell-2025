import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import Card from './Card'
import Card2 from './Card2'
import Footer from './Footer'
import FrequentlyAsked from './FrequentlyAsked'
import Contact from "./Summit_Contact"


const Summit = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        }

        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [setShowMobileMenu])

    const home = useRef(null);
    const events = useRef(null);
    const faqs = useRef(null);
    const contact = useRef(null);
    const speaker = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div ref={home} className='bg-[#000000] w-full h-auto'>
                <div className='z-40 sticky top-0 flex justify-between items-center lg:pl-9 pl-5 py-4 h-16 lg:h-auto  bg-cyan-300/10 lg:bg-transparent'>

                    <Link to='/summit'><img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" /></Link>

                    <div className='z-40 hidden lg:flex gap-7 items-center backdrop-blur-md bg-cyan-300/10 px-9 py-3 rounded-l-full'>
                        <Link onClick={() => scrollToSection(home)} className='text-white font-normal text-base'>Home</Link>
                        <Link onClick={() => scrollToSection(events)} className='text-white font-normal text-base'>Events</Link>
                        <Link onClick={() => scrollToSection(speaker)} className='text-white font-normal text-base'>Past Speakers</Link>
                        <Link to="/summit/merchandise" className='text-white font-normal text-base'>Goodies</Link>
                        <Link onClick={() => scrollToSection(faqs)} className='text-white font-normal text-base'>FAQs</Link>
                        <Link onClick={() => scrollToSection(contact)} className='text-white font-normal text-base'>Contact Us</Link>
                        <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit/passes'>Passes</Link></button>

                    </div>

                    <img onClick={() => setShowMobileMenu(true)} src={assets.toggle_menu} className={`lg:hidden ${showMobileMenu ? 'hidden' : 'block'} h-12 mr-3 z-30 cursor-pointer`} alt="" />
                </div>

                <div className={`lg:hidden ${showMobileMenu ? 'fixed w-[50%]' : 'h-0 w-0'} backdrop-blur-md bg-cyan-300/10 right-0 border-l-[1px] border-[#310742] top-0 bottom-0 overflow-hidden transition-all`}>
                    <div className='flex justify-end p-6 cursor-pointer'><img onClick={() => setShowMobileMenu(false)} className='w-8' src={assets.Cross_icon} alt="" /></div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5'>

                        <Link onClick={() => { setShowMobileMenu(false), scrollToSection(home) }} className='cursor-pointer text-white'>Home</Link>
                        <span className='w-full h-[1px] bg-white'></span>
                        <Link onClick={() => { setShowMobileMenu(false), scrollToSection(events) }} className='cursor-pointer text-white'>Events</Link>
                        <span className='w-full h-[0.9px] bg-white'></span>
                        <Link onClick={() => { setShowMobileMenu(false), scrollToSection(speaker) }} className='cursor-pointer text-white'>Past Speakers</Link>
                        <div className='w-full h-[0.8px] bg-white'></div>
                        <Link onClick={() => { setShowMobileMenu(false) }} to="/summit/merchandise" className='cursor-pointer text-white'>Goodies</Link>
                        <div className='w-full h-[0.8px] bg-white'></div>
                        <Link onClick={() => { setShowMobileMenu(false), scrollToSection(faqs) }} className='cursor-pointer text-white'>FAQs</Link>
                        <div className='w-full h-[0.8px] bg-white'></div>
                        <Link onClick={() => { setShowMobileMenu(false), scrollToSection(contact) }} className='cursor-pointer text-white'>Contact Us</Link>
                        <div className='w-full h-[0.8px] bg-white'></div>
                        <button onClick={() => { setShowMobileMenu(false) }} className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit/passes'>Passes</Link></button>

                    </ul>
                </div>

                <div className='relative h-auto flex flex-wrap justify-center items-center'>

                    <img className='z-10 md:w-7/12 w-10/12 py-7 pt-28  h-auto' src={assets.Summit_Header_img} alt="" />
                    <img className='z-10 pl-10 md:w-6/12 w-9/12 pb-24' src={assets.Dream_dare_disrupt} alt="" />

                    <img className='absolute w-[60vw] sm:w-[40vw] h-auto z-0 opacity-60 blur-md' src={assets.Summit_logo}></img>
                    <img src={assets.bg_1} className=' absolute h-[50vmin] right-0 -top-20' alt="" />
                    <img src={assets.bg_2} className='hidden sm:block z-[4] absolute h-[25vmin] left-0 bottom-5' alt="" />
                    <img src={assets.bg_3} className='hidden sm:block z-0 absolute h-[40vmin] left-0 -bottom-4' alt="" />
                </div>

                <div className='realtive z-10 bg-white text-black font-extrabold mt-10 sm:mb-5 py-4 sm:text-4xl text-sm px-10 sm:flex justify-center'>
                    Timeline for E-Summit - <Link to="https://drive.google.com/file/d/1bSDbPdc8S0LQOYWSV3fenLcksSuIz_9D/view?usp=sharing" target='_blank'>Click here</Link>
                </div>



                {/* <div className='font-semibold sm:text-4xl text-2xl flex flex-col justify-start gap-2 sm:items-start items-center sm:px-56'>
                    <h3 className='text-white'>Day 1</h3>
                    <h5 className='font-semibold sm:text-2xl text-xl text-white'>7th February, 2025</h5>
                </div>

                <div className='text-white sm:px-56 px-10 mt-4'>
                    <table>
                        <th>Hello</th>
                        <th>Hello</th>
                        <th>Hello</th>
                        <th>Hello</th>
                        <th>Hello</th>

                        <tr>hello</tr>
                        <tr>hello</tr>
                        <tr>hello</tr>
                        <tr>hello</tr>
                    </table>
                </div> */}

                <div ref={events} className='realtive z-10 text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-5xl   flex justify-center '>
                    Events

                    <img src={assets.bg_4} className='z-0 absolute h-[60vmin] right-0 ' alt="" />

                </div>
                <div className='relative'>
                    <img src={assets.bg_5} className='z-0 absolute h-[70vmin] right-0 top-11' alt="" />
                    <img src={assets.bg_6} className='z-0 absolute h-[70vmin] left-0 bottom-9' alt="" />

                    <Card />

                </div>

                <div ref={speaker} className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-3xl   flex justify-center '>
                    Past Speakers
                </div>

                <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
                    <Card2 img={assets.speaker_1_yogesh} title="Yogesh Shinde" post="Founder, Bamboo India" linkedin="https://www.linkedin.com/in/yogeshshinde11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_2_ankush} title="Ankush Barjata" post="Founder, Deeva" linkedin="https://www.linkedin.com/in/ankushbarjata?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_3_sunil} title="Sunil Prem" post="Founder, Brisk Olive" linkedin="https://www.linkedin.com/in/sunil-prem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_4_deepak} title="Deepak Goyal" post="Co-Founder, Crew Sphere" linkedin="https://www.linkedin.com/in/deepak-goyal-1511ab7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_5_vaibhav} title="Vaibhav Rathore" post="Co-Founder, Upthrust Esports" linkedin="https://www.linkedin.com/in/rathore-vaibhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_6_varun} title="Varun Rattan Singh" post="CEO, Development Logics" linkedin="https://www.linkedin.com/in/maverickvarun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_7_amandeep} title="Amandeep Srivastava" post="Co-Founder, Black Eye Tech." linkedin="https://www.linkedin.com/in/amandeep-srivastava-6b1a41b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_8_prabhat} title="Prabhat Labh" post="CEO, Grameen Foundation" linkedin="https://www.linkedin.com/in/prabhatlabh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <Card2 img={assets.speaker_9_akshar} title="Akshar Madhavaram" post="Co-Founder & CEO, TIAR" linkedin="" />
                    <Card2 img={assets.speaker_10_sandip} title="Sandip Patil" post="Founder, E-Spin" />
                    <Card2 img={assets.speaker_11_maitri} title="Maitri Shah" post="Co-Founder & CEO, Mind Assest" />
                    <Card2 img={assets.speaker_12_dhwani} title="Dhwani Jain" post="Founder, KARMA Foundation" />

                </div>

                <div ref={faqs} className='text-white font-extrabold py-6 sm:text-7xl text-5xl  my-5 flex justify-center '>
                    FAQs
                </div>

                <FrequentlyAsked />

                <div ref={contact} className='relative text-white font-extrabold z-10 py-6 sm:text-7xl text-5xl  my-5 flex justify-center '>
                    Contact Us

                </div>

                <div className='relative flex justify-center'>
                    <img src={assets.bg_7} className=' absolute h-[70vmin] z-0 md:-top-96 -top-60' alt="" />
                </div>

                <Contact className="z-10" />



                <Footer />


            </div>
        </div>
    )
}

export default Summit

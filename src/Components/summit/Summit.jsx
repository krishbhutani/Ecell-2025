import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import Card from './Card'
import Card2 from './Card2'
import Footer from './Footer'
import FrequentlyAsked from './FrequentlyAsked'

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

    return (
        <div>
            <div className='bg-[#000000] w-full h-auto'>
                <div className='z-10 sticky top-0 flex justify-between items-center lg:pl-9 pl-5 py-4 h-16 lg:h-auto  bg-cyan-300/10 lg:bg-transparent'>

                    <img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" />

                    <div className='z-40 hidden lg:flex gap-7 items-center backdrop-blur-md bg-cyan-300/10 px-9 py-3 rounded-l-full'>
                        <Link className='text-white font-normal text-base'>Home</Link>
                        <Link className='text-white font-normal text-base'>Events</Link>
                        <Link to="gallary" className='text-white font-normal text-base'>Speakers</Link>
                        <Link className='text-white font-normal text-base'>Guests</Link>
                        <Link className='text-white font-normal text-base'>Faqs</Link>
                        <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '>Passes</button>

                    </div>

                    <img onClick={() => setShowMobileMenu(true)} src={assets.toggle_menu} className={`lg:hidden ${showMobileMenu ? 'hidden' : 'block'} h-12 mr-3 z-30 cursor-pointer`} alt="" />
                </div>

                <div className={`z-20 lg:hidden ${showMobileMenu ? 'fixed w-[50%]' : 'h-0 w-0'} backdrop-blur-3xl bg-cyan-300/10 right-0 border-l-[1px] border-[#310742] top-0 bottom-0 overflow-hidden transition-all`}>
                                <div className='flex justify-end p-6 cursor-pointer'><img onClick={()=> setShowMobileMenu(false)} className='w-8'  src={assets.Cross_icon} alt="" /></div>
                            <ul className='flex  flex-col items-center gap-2 mt-5 px-5  '>
                                
                                        <Link onClick={()=> setShowMobileMenu(false)} to='/' className='cursor-pointer text-white'>Home</Link>
                                        <span className='w-full h-[1px] bg-white'></span>
                                        <Link onClick={()=> setShowMobileMenu(false)} to='/about' className='cursor-pointer text-white'>About Us</Link>
                                        <span className='w-full h-[0.9px] bg-white'></span>
                                        <Link onClick={()=> setShowMobileMenu(false)} to='/team' className='cursor-pointer text-white'>Our Team</Link>
                                        <div className='w-full h-[0.8px] bg-white'></div>
                                        <Link onClick={()=> setShowMobileMenu(false)} to='/alumni' className='cursor-pointer text-white'>Our Alumni</Link>
                                        <div className='w-full h-[0.8px] bg-white'></div>
                                        <Link onClick={()=> setShowMobileMenu(false)} to='/contact' className='cursor-pointer text-white'>Contact Us</Link>
                                        <div className='w-full h-[0.8px] bg-white'></div>
                
                                    </ul>
                            </div>

                <div className='relative h-auto flex flex-wrap justify-center items-center'>
                    <img className='z-10 md:w-7/12 w-10/12 md:py-40 py-32 h-auto' src={assets.Summit_Header_img} alt="" />
                    <img className='absolute w-[60vw] sm:w-[40vw] h-auto z-0 opacity-60 blur-md' src={assets.Summit_logo}></img>
                    <img src={assets.bg_1} className=' absolute h-[50vmin] right-0 -top-20' alt="" />
                    <img src={assets.bg_2} className='hidden sm:block z-[4] absolute h-[25vmin] left-0 bottom-5' alt="" />
                    <img src={assets.bg_3} className='hidden sm:block z-0 absolute h-[40vmin] left-0 -bottom-4' alt="" />
                </div>

                <div className='realtive z-10 text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-5xl   flex justify-center '>
                    Events

                    <img src={assets.bg_4} className='z-0 absolute h-[60vmin] right-0 ' alt="" />

                </div>
                <div className='relative'>
                    <img src={assets.bg_5} className='z-0 absolute h-[70vmin] right-0 top-11' alt="" />
                    <img src={assets.bg_6} className='z-0 absolute h-[70vmin] left-0 bottom-9' alt="" />

                    <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
                        <Card img={assets.Event_1} title="Virtual Stock Market" subtitle = "kdhlas hlhf shf hf ksfk skfls fsal fasfls gsdglsdl sd hello something something hello honey bunny" />
                        <Card img={assets.Event_2} title="Find The Bug" />
                        <Card img={assets.Event_3} title="Startup Expo" />
                        <Card img={assets.Event_4} title="Startup Debate" />
                        <Card img={assets.Event_1} title="Virtual Stock Market" />
                        <Card img={assets.Event_2} title="Find The Bug" />
                        <Card img={assets.Event_3} title="Startup Expo" />
                        <Card img={assets.Event_4} title="Startup Debate" />
                        <Card img={assets.Event_1} title="Virtual Stock Market" />
                        <Card img={assets.Event_2} title="Find The Bug" />
                        <Card img={assets.Event_3} title="Startup Expo" />
                        <Card img={assets.Event_4} title="Startup Debate" />
                    </div>

                </div>

                <div id="gallary" className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-3xl   flex justify-center '>
                    Past Speakers
                </div>

                <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva" />

                </div>

                <div className='text-white font-extrabold py-6 sm:text-7xl text-5xl   flex justify-center '>
                    Faqs
                </div>

                <FrequentlyAsked/>

                <Footer/>


            </div>
        </div>
    )
}

export default Summit

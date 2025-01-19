import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import Card from './Card'
import Card2 from './Card2'

const Summit = () => {
    return (
        <div>
            <div className='bg-[#000000] w-full h-auto'>
                <div className='z-20 sticky top-0 flex justify-between lg:pl-9 pl-5 lg:pt-7 pt-4 '>
                    
                    <img className='lg:h-12 md:h-9 h-7 z-20' src={assets.Ecell_logo} alt="" />
                    
                    <div className='z-20 hidden lg:flex gap-7 items-center backdrop-blur-md bg-cyan-300/10 px-9 rounded-l-full'>
                        <Link className='text-white font-normal text-base'>Home</Link>
                        <Link className='text-white font-normal text-base'>Highlights</Link>
                        <Link className='text-white font-normal text-base'>Gallery</Link>
                        <Link className='text-white font-normal text-base'>Guests</Link>
                        <Link className='text-white font-normal text-base'>Organizers</Link>
                        <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '>Passes</button>
                    </div>
                </div>

                <div className='relative h-auto flex flex-wrap justify-center items-center'>
                    <img className='z-10 md:w-7/12 w-10/12 md:py-40 py-32 h-auto' src={assets.Summit_Header_img} alt="" />
                    <img className='absolute w-4/12 h-auto z-0 opacity-60 blur-md' src={assets.Summit_logo}></img>
                    <img src={assets.bg_1} className='z-0 absolute h-[60vmin] right-0 top-0' alt="" />
                    <img src={assets.bg_2} className='z-[4] absolute h-[30vmin] left-0 bottom-5' alt="" />
                    <img src={assets.bg_3} className='z-0 absolute h-[40vmin] left-0 -bottom-4' alt="" />
                </div>

                <div className='realtive text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-5xl   flex justify-center '>
                    Events 

                    <img src={assets.bg_4} className='z-0 absolute h-[60vmin] right-0 ' alt="" />
                    
                </div>
                <div className='relative'>
                <img src={assets.bg_5} className='z-0 absolute h-[70vmin] right-0 top-11' alt="" />
                <img src={assets.bg_6} className='z-0 absolute h-[70vmin] left-0 bottom-9' alt="" />
               
                <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
                <Card img={assets.Event_1} title="Virtual Stock Market" />
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

                <div className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-5xl   flex justify-center '>
                    Past Speakers
                </div>

                <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                    <Card2 img={assets.Past_sp_6} title="Ankush Barjata" post="Founder, Deeva"/>
                
                </div>

                <div className='text-white font-extrabold mt-10 mb-5 py-6 sm:text-7xl text-5xl   flex justify-center '>
                   Faqs
                </div>

                
            </div>
        </div>
    )
}

export default Summit

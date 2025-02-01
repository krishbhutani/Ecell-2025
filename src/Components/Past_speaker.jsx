import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

const Past_speaker = () => {
    const card_past = (props)=>{
        <div className='h-[310px] w-64 '>
              <div className='relative overflow-hidden '>
              <img className='h-64 w-full object-cover roun  rounded-lg ' src={props.img} alt=""/>
                
              </div>
              <div className='text-white flex justify-center font-semibold'>
                {props.title}
              </div>
              <div className='text-white flex justify-center'>
                {props.post}
              </div>
            </div>
    }



    return (
        <div>
            <motion.div
            initial = {{opacity:0,translateY: "10%"}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration: 1}}

            className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'  >
                <div>
                    {/* <span className='text-slate-500'>Our</span><span className='inline-block'>Past Speakers</span> */}
                    <div className='flex flex-row items-center justify-start sm:text-4xl text-3xl mb-2 sm:mb-0 font-medium ' >
                        <div ><span className='text-slate-500'>Our</span> Past Speakers</div>
                        <div className='pt-2' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden  size-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg></div>
                    </div>
                </div>

                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500 mt-5'>
                    Discover the influential speakers who have shared their wisdom and insights at E-Cell events, enriching the entrepreneurial spirit.
                </div>

                <div className='grid sm:grid-cols-12 grid-flow-row-dense grid-cols-3 grid-rows-2 gap-4 mt-4'>
                    <div className=' col-span-2 h-48 rounded-md '><img className='object-cover h-full w-full' src={assets.Past_sp_1} alt="" /></div>
                    <div className=' col-span-4 h-48 rounded-lg'><img className='object-cover h-full w-full' src={assets.Past_sp_3} alt="" /></div>
                    <div className=' col-span-3 row-span-2 rounded-lg'><img className='object-cover h-full w-full' src={assets.Past_sp_6} alt="" /></div>
                    <div className=' col-span-1 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_8} alt="" /></div>
                    <div className=' col-span-2 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_7} alt="" /></div>

                    <div className=' col-span-2 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_2} alt="" /></div>
                    <div className=' col-span-2 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_4} alt="" /></div>
                    <div className=' col-span-2 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_5} alt="" /></div>
                    <div className=' col-span-3 rounded-lg'><img className='object-cover h-48 w-full' src={assets.Past_sp_9} alt="" /></div>


                </div>


                {/* <Marquee className='pt-10' pauseOnHover speed={150}>
                    
                <card_past img={assets.speaker_1_yogesh} title="Yogesh Shinde" post="Founder, Bamboo India" linkedin="https://www.linkedin.com/in/yogeshshinde11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_2_ankush} title="Ankush Barjata" post="Founder, Deeva" linkedin="https://www.linkedin.com/in/ankushbarjata?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_3_sunil} title="Sunil Prem" post="Founder, Brisk Olive" linkedin="https://www.linkedin.com/in/sunil-prem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_4_deepak} title="Deepak Goyal" post="Co-Founder, Crew Sphere" linkedin="https://www.linkedin.com/in/deepak-goyal-1511ab7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_5_vaibhav} title="Vaibhav Rathore" post="Co-Founder, Upthrust Esports" linkedin="https://www.linkedin.com/in/rathore-vaibhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"/>
                    <card_past img={assets.speaker_6_varun} title="Varun Rattan Singh" post="CEO, Development Logics" linkedin="https://www.linkedin.com/in/maverickvarun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_7_amandeep} title="Amandeep Srivastava" post="Co-Founder, Black Eye Tech." linkedin="https://www.linkedin.com/in/amandeep-srivastava-6b1a41b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_8_prabhat} title="Prabhat Labh" post="CEO, Grameen Foundation" linkedin="https://www.linkedin.com/in/prabhatlabh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                    <card_past img={assets.speaker_9_akshar} title="Akshar Madhavaram" post="Co-Founder & CEO, TIAR" linkedin=""/>
                    <card_past img={assets.speaker_10_sandip} title="Sandip Patil" post="Founder, E-Spin" />
                    <card_past img={assets.speaker_11_maitri} title="Maitri Shah" post="Co-Founder & CEO, Mind Assest" />
                    <card_past img={assets.speaker_12_dhwani} title="Dhwani Jain" post="Founder, KARMA Foundation" />
                </Marquee> */}
            </motion.div>
            <div className='flex lg:flex-row flex-col lg:px-0 px-6 items-center lg:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl md:text-2xl lg:text-3xl mr-3'>Wanna see how people react to our reels on <span className='text-yellow-300'>Instagram</span>
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        <Link to="https://www.instagram.com/ecell_nith?igsh=dG9vaDBxaWM0Z2pz&utm_source=qr" target='_blank'>Click here</Link>
                        <svg class="hidden rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Past_speaker

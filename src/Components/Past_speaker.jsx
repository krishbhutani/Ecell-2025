import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const Past_speaker = () => {
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
            </motion.div>
            <div className='flex lg:flex-row flex-col lg:px-0 px-6 items-center lg:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl md:text-2xl lg:text-3xl mr-3'>Wanna see how people react to our reels on <span className='text-yellow-300'>Instagram</span>
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        <Link to = "">Click here</Link>
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

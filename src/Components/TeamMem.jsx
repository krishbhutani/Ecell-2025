import React from 'react'
import { assets } from '../assets/assets'

const TeamMem = () => {
    return (
        <div className='w-full'>


            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3  '>
                    <span className='text-slate-500'>Our</span><span>Team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>

                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Step into the vibrant world of E-Cell NIT Hamirpur through our gallery, capturing moments of inspiration, collaboration, and entrepreneurial zeal from our events and initiatives.
                </div>

                {/* Web Development */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Web Development</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div class="grid grid-cols-subgrid sm:col-start-3 col-start-1 gap-10 col-span-8">
                            <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-4 col-span-8 h-80 w-auto'>
                                <div className='overflow-hidden'>
                                    <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Krish} alt="" />
                                </div>
                                <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                    <p className='text-white text-xl font-medium pl-2 pt-2'>Krish Bhutani</p>
                                    <p className='text-slate-100 pl-2 -mt-1'>Web Coordinator</p>

                                </div>
                            </div>


                            <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-4 col-span-8 h-80 w-auto'>
                                <div className='overflow-hidden'>
                                    <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Abhinav} alt="" />
                                </div>
                                <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                    <p className='text-white text-xl font-medium pl-2 pt-2'>Abhinav Dhiman</p>
                                    <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* Graphics-Media */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Media-Graphics</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div class="grid grid-cols-subgrid sm:col-start-3 col-start-1 gap-10 col-span-8">
                            <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-4 col-span-8 h-80 w-auto'>
                                <div className='overflow-hidden'>
                                    <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Kartik} alt="" />
                                </div>
                                <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                    <p className='text-white text-xl font-medium pl-2 pt-2'>Kartik D. Gadade</p>
                                    <p className='text-slate-100 pl-2 -mt-1'>Media Coordinator</p>

                                </div>
                            </div>


                            <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-4 col-span-8 h-80 w-auto'>
                                <div className='overflow-hidden'>
                                    <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Parti} alt="" />
                                </div >
                                <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                    <p className='text-white text-xl font-medium pl-2 pt-2'>Harshit Parti</p>
                                    <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Public Relations */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Public Relations</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Gyan} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Gyan Prakash</p>
                                <p className='text-slate-100 pl-2 -mt-1'>PR Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Khushi} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Khushi Singh</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Divyanshu} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Divyanshu Verma</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Finance */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Finance</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Vaishnav} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Vaishnav A. Baravkar</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Finance Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Prashant} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Prashant Kumar</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Yash} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Yash Taank</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Corporate Public Relations */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Corporate Public Relations</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Srujan} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Srujan Sontakke</p>
                                <p className='text-slate-100 pl-2 -mt-1'>CPR Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Janhavi} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Janhavi Bisht</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Sachit} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Sachit Sharma</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech & Innovation */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium sm:text-3xl text-xl'>Tech & Innovation</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.unknown} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Prachi Pathak</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Coordiantor</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.Nupur} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Nupur Rana</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div className='overflow-hidden'>
                                <img className="h-64 w-full object-cover rounded-t-lg hover:scale-110 hover:-rotate-3 duration-1000" src={assets.unknown} alt="" />
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Anurag Yadav</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Sub-Coordinator</p>

                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div >
    )
}

export default TeamMem

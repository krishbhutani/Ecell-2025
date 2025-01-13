import React from 'react'
import { assets } from '../assets/assets'

const Team = () => {
    return (
        <div id="Team">
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Vision</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Meet the driving force behind E-cell NIT Hamirpur-our dedicated team,passionately working together to inspire innovation,foster collaboration, and fuel the entrepreneurial spirit.
                </div>

                <div className=' grid sm:grid-cols-12 grid-cols-3  gap-6 mt-7 mb-7 sm:px-0 px-10'>
                    <div class="grid grid-cols-subgrid sm:col-start-5 col-start-1 gap-10 col-span-12">
                        <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-3 col-span-12 h-[655px]  w-auto'>
                            <div >
                                <img className="h-64 w-full object-cover rounded-t-lg " src={assets.unknown} alt="" />
                            </div>
                            <div className='w-full h-px bg-black'></div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-[399px] top-0'>
                                <p className='text-white text-xl mb-1 font-medium pl-2 pt-2 flex justify-center'>Dr. Jai Prakash</p>
                                <p className='text-slate-100 pl-2 -mt-1 flex justify-center pb-2'>Faculty Incharge</p>
                                <div className='w-full h-px bg-black'></div>
                                <p className='px-4 py-2 h-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maxime? Repellendus ullam ipsum ducimus molestias! Soluta maxime ex dicta repudiandae nam beatae nobis ab quibusdam quasi ea. Magnam laborum, aperiam pariatur id aspernatur distinctio libero reprehenderit accusamus culpa facilis repudiandae soluta hic vitae iste. Eligendi.</p>

                            </div>
                        </div>


                        <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-3 col-span-12 h-[655px]  w-auto'>
                            <div >
                                <img className="h-64 w-full object-cover rounded-t-lg " src={assets.Robin} alt="" />
                            </div>
                            <div className='w-full h-px bg-black'></div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-[399px] top-0'>
                                <p className='text-white text-xl mb-1 font-medium pl-2 pt-2 flex justify-center'>Dr. Robin Singh Bhadoria</p>
                                <p className='text-slate-100 pl-2 -mt-1 flex justify-center pb-2'>Assistant Faculty Incharge</p>
                                <div className='w-full h-px bg-black'></div>
                                <p className='px-4 py-2 h-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maxime? Repellendus ullam ipsum ducimus molestias! Soluta maxime ex dicta repudiandae nam beatae nobis ab quibusdam quasi ea. Magnam laborum, aperiam pariatur id aspernatur distinctio libero reprehenderit accusamus culpa facilis repudiandae soluta hic vitae iste. Eligendi.</p>

                            </div>
                        </div>
                    </div>


                    <div class="grid grid-cols-subgrid sm:col-start-3 col-start-1 gap-10 sm:mt-5 sm:mb-7 col-span-12">
                    <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-3 col-span-12 h-[655px]  w-auto'>
                            <div >
                                <img className="h-64 w-full object-cover rounded-t-lg " src={assets.Rishikesh_Mishra} alt="" />
                            </div>
                            <div className='w-full h-px bg-black'></div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-[399px] top-0'>
                                <p className='text-white text-xl mb-1 font-medium pl-2 pt-2 flex justify-center'>Rishikesh Mishra</p>
                                <p className='text-slate-100 pl-2 -mt-1 flex justify-center pb-2'>Manager</p>
                                <div className='w-full h-px bg-black'></div>
                                <p className='px-4 py-2 h-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maxime? Repellendus ullam ipsum ducimus molestias! Soluta maxime ex dicta repudiandae nam beatae nobis ab quibusdam quasi ea. Magnam laborum, aperiam pariatur id aspernatur distinctio libero reprehenderit accusamus culpa facilis repudiandae soluta hic vitae iste. Eligendi.</p>

                            </div>
                        </div>

                        <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-3 col-span-12 h-[655px]  w-auto'>
                            <div >
                                <img className="h-64 w-full object-cover rounded-t-lg " src={assets.Aryan_mittal} alt="" />
                            </div>
                            <div className='w-full h-px bg-black'></div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-[399px] top-0'>
                                <p className='text-white text-xl mb-1 font-medium pl-2 pt-2 flex justify-center'>Aryan Mittal</p>
                                <p className='text-slate-100 pl-2 -mt-1 flex justify-center pb-2'>Assistant Manager</p>
                                <div className='w-full h-px bg-black'></div>
                                <p className='px-4 py-2 h-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maxime? Repellendus ullam ipsum ducimus molestias! Soluta maxime ex dicta repudiandae nam beatae nobis ab quibusdam quasi ea. Magnam laborum, aperiam pariatur id aspernatur distinctio libero reprehenderit accusamus culpa facilis repudiandae soluta hic vitae iste. Eligendi.</p>

                            </div>
                        </div>


                        <div className=' bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  sm:col-span-3 col-span-12 h-[655px]  w-auto'>
                            <div >
                                <img className="h-64 w-full object-cover rounded-t-lg " src={assets.Ashmit} alt="" />
                            </div>
                            <div className='w-full h-px bg-black'></div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-[399px] top-0'>
                                <p className='text-white text-xl mb-1 font-medium pl-2 pt-2 flex justify-center'>Ashmit Gupta</p>
                                <p className='text-slate-100 pl-2 -mt-1 flex justify-center pb-2'>Overall Coordinator</p>
                                <div className='w-full h-px bg-black'></div>
                                <p className='px-4 py-2 h-auto text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maxime? Repellendus ullam ipsum ducimus molestias! Soluta maxime ex dicta repudiandae nam beatae nobis ab quibusdam quasi ea. Magnam laborum, aperiam pariatur id aspernatur distinctio libero reprehenderit accusamus culpa facilis repudiandae soluta hic vitae iste. Eligendi.</p>

                            </div>
                        </div>
                    </div>












                </div>
            </div>


            <div />

        </div>

    )
}

export default Team

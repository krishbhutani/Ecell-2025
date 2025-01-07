import React from 'react'

const Team = () => {
    return (
        <div id="Team">
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Meet the driving force behind E-cell NIT Hamirpur-our dedicated team,passionately working together to inspire innovation,foster collaboration, and fuel the entrepreneurial spirit.
                </div>

                <div className='mb-16 grid sm:grid-cols-3 sm:gap-40 gap-5 sm:px-40 px-10 mt-10'>
                    <div className='sm:h-80 h-96'>
                        <div className='h-72  bg-[#DD89AF] rounded-lg'></div>
                        <div className='h-20 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                    <div className=' sm:h-80 h-96'>
                        <div className='h-72 bg-[#DD89AF] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                    <div className='sm:h-80 h-96'>
                        <div className='h-72 bg-[#DD89AF] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                </div>


{/*  

                <div className=' grid sm:grid-cols-4 sm:gap-36 gap-5 sm:px-0 px-10 sm:mt-6 mt-4'>
                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F90308] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F90308] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F90308] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className='sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F90308] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                </div>

          




                <div className='grid sm:grid-cols-4 sm:gap-36 gap-5 sm:px-0 px-10 sm:mt-6 mt-4'>
                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F2CC84] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F2CC84] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F2CC84] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className='sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#F2CC84] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                </div>



             

                <div className='grid sm:grid-cols-4 sm:gap-36 gap-5 sm:px-0 px-10 sm:mt-6 mt-4'>
                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#E3C42B] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#E3C42B] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className=' sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#E3C42B] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>

                    <div className='sm:h-80 h-96'>
                        <div className='h-4/5 bg-[#E3C42B] rounded-lg'></div>
                        <div className='h-1/5 flex flex-col items-center justify-center mt-2'>
                            <div className='font-semibold text-xl'>Your Name</div>
                            <div>Your Post</div>
                        </div>
                    </div>
                   
                </div>
                 */}

            </div>


<div/>

        </div>
    
    )
}

export default Team

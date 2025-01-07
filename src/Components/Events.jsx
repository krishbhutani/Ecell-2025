import React from 'react'

const Events = () => {
    return (
        <div>
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Explore the dynamic events hosted by E-Cell NIT Hamirpur, where innovation thrives and entrepreneurs connect to turn ideas into impactful ventures.
                </div>

                <div className='mt-5 grid sm:grid-cols-12 grid-cols-6 grid-rows-2 gap-4'>
                    <div className='bg-[#E97451] col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > Venturo</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Premier event celebrating innovation and startup excellence.</div>
                    </div>

                    <div className='bg-[#CC5500] col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > Panel Discussion</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Expert-led debates on entrepreneurial topics.</div>
                    </div>
                    <div className='bg-[#E3C42B] col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > Corporate Hunt</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Engaging treasure hunt with a business twist.</div>
                    </div>
                    <div className='bg-[#F90308] col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > Talk Show</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Inspiring conversation with successful entrepreneurs.</div>
                    </div>
                    <div className='bg-[#369FC0] sm:col-span-4 col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > B-Quiz</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Challenging quiz to test entrepreneurial knowledge.</div>
                    </div>
                    <div className='bg-[#FFBF00] sm:col-span-4 col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > Funding Events </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Pitch platforms connecting startup with investors.</div>
                    </div>

                    <div className='bg-[#A7BA42] sm:col-span-4 col-span-3 rounded-md p-6 '>
                        <div className='font-medium text-2xl text-white -mb-3' > IPL Auction</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                        <div className='-mt-3 mb-2 w-10/12 text-pretty font-medium leading-5 text-white'>Simulated bidding event for fun and strategy.</div>
                    </div>

                </div>
            </div>


            <div className='flex sm:flex-row flex-col sm:px-0 px-6 items-center sm:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl sm:text-3xl mr-3'>Wanna explore more about NITH
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        Click here
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Events

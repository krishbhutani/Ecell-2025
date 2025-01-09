import React from 'react'
import { assets } from '../assets/assets'

const Initiatives = () => {
    return (
        <div>
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Initiatives</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-4/12 font-medium font-title text-slate-500'>
                    Discover the transformative initiatives by E-Cell NIT
                    Hamirpur, empowering aspiring entrepreneurs with the resources and guidance to bring their visions to life.
                </div>






                {/* <div className='grid  grid-rows-2 gap-4 mt-4'>
                    <div className='h-52 col-span-3 sm:col-span-1 w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/E-summit.png')" }}>

                    </div>
                    <div className='h-52 col-span-3 sm:col-span-1 w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/SIP.png')" }}>

                    </div>
                    <div className='h-52 col-span-3 sm:col-span-1 w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/Crescendo.png')" }}>

                    </div>
                    <div className='col-span-3 h-52 w-auto rounded-lg bg-cover bg-center  border-[#310742]' style={{ backgroundImage: "url('/Linkdin.png')" }}>

                    </div>
                </div> */}



                <div className=' grid sm:grid-cols-12 grid-cols-3  gap-6 mt-7 mb-7'>
                    <div className=' bg-[#310742ce] rounded-lg border-black border-2  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Summit</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    Explore
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <img className="relative -top-80  hover:opacity-0   duration-1000 h-80 w-full object-fill rounded-lg" src="https://assets.weforum.org/article/image/NBRH77oxbpu73Wd7YUbDSqlIqQ64eliB7xMvckVp5pA.jpg" alt="" />
                        </div>
                    </div>


                    <div className=' bg-[#310742ce] rounded-lg border-black border-2  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Crescendo</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    Explore
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <img className="relative -top-80  hover:opacity-0   duration-1000 h-80 w-full object-cover rounded-lg" src="https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2024/08/Image-10-aug.jpg" alt="" />
                        </div>
                    </div>


                    <div className=' bg-[#310742ce] rounded-lg border-black border-2  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>Hult Prize</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    Explore
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <img className="relative -top-80   hover:opacity-0   duration-1000 h-80 w-full object-cover rounded-lg" src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>


                    <div className=' bg-[#310742ce] rounded-lg border-black border-2  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>SIP</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    Explore
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <img className="relative -top-80  hover:opacity-0   duration-1000 h-80 w-full object-cover rounded-lg" src="https://dbs7qpzv4mcv.cloudfront.net/what-is-sip-its-meaning-6399c790605ac.jpg" alt="" />
                        </div>
                    </div>




                </div>


            </div>
            <div className='flex sm:flex-row flex-col sm:px-0 px-6 items-center sm:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl sm:text-3xl mr-3'>Wanna see how people react to our posts on <span className='text-yellow-300'>linkedin</span>
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

export default Initiatives

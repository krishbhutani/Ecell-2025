import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Initiatives = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }}



                className='w-full pt-5 sm:px-20 px-10'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3 '>
                    <span className='text-slate-500'>Our</span><span>Initiatives</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-4/12 font-medium font-title text-slate-500 mt-5'>
                    Discover the transformative initiatives by E-Cell NIT
                    Hamirpur, empowering aspiring entrepreneurs with the resources and guidance to bring their visions to life.
                </div>


                {/* <div className=' grid xl:grid-cols-12 sm:grid-cols-6 grid-cols-3  gap-6 mt-7 mb-7'>
                    <div className='box-content bg-[#310742ce]  rounded-lg border-black border-4  col-span-3  h-80 w-auto'>
                        <div className=' h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Summit</div>
                            <p className='py-3 px-2 text-white  font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="/coming">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="/coming"><img className="relative -top-80  sm:hover:opacity-0   duration-1000 h-80 w-full object-fill rounded-lg" src={assets.E_summit} alt="" /></Link>
                        </div>
                    </div>


                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Crescendo</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="https://e-crescendo.vercel.app">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="https://e-crescendo.vercel.app"><img className="relative -top-80 sm:hover:opacity-0  duration-1000 h-80 w-full object-cover rounded-lg" src={assets.Crescendo} alt="" /></Link>
                        </div>
                    </div>


                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>Hult Prize</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="https://ecell-hult-e.vercel.app">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="https://ecell-hult-e.vercel.app"><img className="relative -top-80   sm:hover:opacity-0    duration-1000 h-80 w-full object-cover rounded-lg" src={assets.Hult} alt="" /></Link>
                        </div>
                    </div>


                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4  col-span-3  h-80 w-auto'>
                        <div className='h-80 p-4'>
                            <div className='flex justify-center font-bold text-3xl text-white'>SIP</div>
                            <p className='py-3 px-2 text-white font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam cumque saepe facilis fuga blanditiis quaerat a recusandae quisquam ipsam, non laborum sequi repellat veniam dolores dolorum, illum error necessitatibus aliquid! Saepe.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="/coming">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="/coming"><img className="relative -top-80  sm:hover:opacity-0   duration-1000 h-80 w-full object-cover rounded-lg" src={assets.SIP} alt="" /></Link>
                        </div>
                    </div>




                </div> */}



                <div className='flex flex-wrap lg:gap-6 gap-4 my-7 justify-center'>



                    <div className='box-content bg-[#310742ce]  rounded-lg border-black border-4  h-80 w-[275px]'>
                        <div className=' h-80 md:p-4 p-1'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Summit</div>
                            <p className='sm:py-3 py-2 sm:px-2 px-1 text-white  sm:font-normal font-light'>E-Summit is where innovation meets opportunity! Attendees connect with industry leaders, participate in workshops, and pitch startups to investors, making it ideal for budding entrepreneurs.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="/coming">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="/coming"><img className="relative -top-80  sm:hover:opacity-0   duration-1000 h-80 w-full object-fill rounded-lg" src={assets.E_summit} alt="" /></Link>
                        </div>
                    </div>


                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4  col-span-3  h-80 w-[275px]'>
                        <div className='h-80 md:p-4 p-1'>
                            <div className='flex justify-center font-bold text-3xl text-white'>E-Crescendo</div>
                            <p className='sm:py-3 py-2 sm:px-2 px-1 text-white  sm:font-normal font-light'>Ecresendo is a vibrant platform where the young entrepreneurs prove their metal by pitching their extraordinary ideas thereby laying a foundation for upholding their vision.
                            Join us to experience the thrill.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="https://e-crescendo.vercel.app">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="https://e-crescendo.vercel.app"><img className="relative -top-80 sm:hover:opacity-0  duration-1000 h-80 w-full object-cover rounded-lg" src={assets.Crescendo} alt="" /></Link>
                        </div>
                    </div>
                    

                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4 h-80 w-[275px]'>
                        <div className='h-80 md:p-4 p-1'>
                            <div className='flex justify-center font-bold text-3xl text-white'>Hult Prize</div>
                            <p className='sm:py-3 py-2 sm:px-2 px-1 text-white  sm:font-normal font-light'>The Hult Prize Campus Program at NIT Hamirpur invites students to develop innovative solutions for global issues, offering mentorship, competition, and seed funding for impactful ventures.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="https://ecell-hult-e.vercel.app">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="https://ecell-hult-e.vercel.app"><img className="relative -top-80   sm:hover:opacity-0    duration-1000 h-80 w-full object-cover rounded-lg" src={assets.Hult} alt="" /></Link>
                        </div>
                    </div>


                    <div className='box-content bg-[#310742ce] rounded-lg border-black border-4  h-80 w-[275px]'>
                        <div className='h-80 md:p-4 p-1'>
                            <div className='flex justify-center font-bold text-3xl text-white'>SIP</div>
                            <p className='sm:py-3 py-2 sm:px-2 px-1 text-white  sm:font-normal font-light'>The Startup Internship Program provides students hands-on experience, mentorship, and real-world exposure in startups, bridging academics and entrepreneurship while fostering creativity and professional growth.</p>
                            <div className='flex justify-center'>
                                <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    <Link to="/coming">Explore</Link>
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div >
                            <Link to="/coming"><img className="relative -top-80  sm:hover:opacity-0   duration-1000 h-80 w-full object-cover rounded-lg" src={assets.SIP} alt="" /></Link>
                        </div>
                    </div>





                </div>


            </motion.div >
            <div className='flex lg:flex-row flex-col lg:px-0 px-6 items-center lg:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl md:text-2xl lg:text-3xl mr-3'>Wanna see how people react to our posts on <span className='text-yellow-300'>linkedin</span>
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 lg:mt-0 bg-white hover:bg-zinc-400 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        <Link to="https://www.linkedin.com/company/entrepreneurshipcellnith/">Click here</Link>
                        <svg class="hidden rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Initiatives

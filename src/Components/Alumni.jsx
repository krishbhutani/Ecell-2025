import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Alumni = () => {
    return (
        <div className='w-full'>


            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3  '>
                    <span className='text-slate-500'>Our</span><span>Alumni</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>

                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Step into the vibrant world of E-Cell NIT Hamirpur through our gallery, capturing moments of inspiration, collaboration, and entrepreneurial zeal from our events and initiatives.
                </div>

                {/* Batch 2023-24 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2023-24</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/yash-panthri/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Yash_Panthri_alumini} alt="" /></Link>
                                
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Yash Panthri</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Manager </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/sagar-attri-28a889202/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Sagar_Attri_Alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Sagar Attri</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Assistant Manager   </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/arnav-sharma-348829206/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Arnav_Sharma_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Arnav Sharma</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Overall Coordinator  </p>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Batch 2022-23 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2022-23</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                    <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/ayush-kaushik/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Ayush_Kaushik_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Ayush Kaushik</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Manager </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/harsh-raj-672225193/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets. Harsh_Raj_Alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Harsh Raj</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Assistant Manager   </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/vanisharma0830/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Vani_Sharma_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Vani Sharma</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Overall Coordinator  </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Batch 2021-22 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2021-22</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                    <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/ar-deepika-agarwal-7a6407179/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Deepika_agarwal_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Deepika Agarwal</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Manager </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div >
                                <Link to = "https://www.linkedin.com/in/radhika-bhatti-34232a1aa/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Radhika_Bhatti_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Radhika Bhatti</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Assistant Manager   </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/akhyarai/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Akhya_Rai_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Akhya Rai</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Overall Coordinator  </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Batch 2020-21 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2020-21</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                    <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/vaibhav-kumar-maheshwari-34b491156/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Vaibhav_Maheshwari_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Vaibhav Maheshwari</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Manager </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/pawan-sehrawat-079724161/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Pawan_Sehrawat_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Pawan Sehrawat</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Assistant Manager   </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/abhishek-kolish/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Abhishek_Kolish_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Abhishek Kolish</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Overall Coordinator  </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Batch 2019-20 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2019-20</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                    <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/shubhamvijay-/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Shubham_Vijay_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Shubham Vijay</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Manager </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/shrey-asati/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets. Shrey_Asati_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Shrey Asati</p>
                                <p className='text-slate-100 pl-2 -mt-1'>Assistant Manager   </p>

                            </div>
                        </div>

                        <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4  h-80 w-auto'>
                            <div >
                                <Link to="https://www.linkedin.com/in/shashantmangal/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Shashant_Mangal_alumini} alt="" /></Link>
                            </div>
                            <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                <p className='text-white text-xl font-medium pl-2 pt-2'>Shashant Mangal  </p>
                                <p className='text-slate-100 pl-2 -mt-1'>Overall Coordinator  </p>

                            </div>
                        </div>
                    </div>
                </div>


                {/* Batch 2018-19 */}

                <div className='mt-5'>
                    <div className='w-full h-px bg-black'></div>
                    <div className='flex justify-center py-3 font-medium text-3xl'>Batch 2018-19</div>
                    <div className='w-full h-px bg-black'></div>

                    <div className='mt-10 grid sm:grid-cols-12 grid-cols-4 gap-10 sm:px-28 px-8 mb-20'>
                        

                        <div class="grid grid-cols-subgrid sm:col-start-5 col-start-1 gap-10 col-span-4">
                            <div className='bg-slate-500 rounded-lg border-black border-2 shadow-[#310747] shadow-xl  col-span-4 h-80 w-auto'>
                                <div >
                                    <Link to="https://www.linkedin.com/in/siddhant-garg-2409/" target="_blank"><img className="h-64 w-full object-cover rounded-t-lg" src={assets.Siddhant_Garg_alumini} alt="" /></Link>
                                </div>
                                <div className='relative rounded-b-lg bg-[#310742a4] h-16 top-0'>
                                    <p className='text-white text-xl font-medium pl-2 pt-2'>Siddhant Garg</p>
                                    <p className='text-slate-100 pl-2 -mt-1'>President  </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                


            </div>
        </div>
    )
}

export default Alumni

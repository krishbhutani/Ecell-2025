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



                <div className=' grid sm:grid-cols-12 grid-cols-6  gap-3 mt-7'>
                    <div className='overflow-hidden  flex flex-col justify-start  h-96 col-span-3  w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/Initiatives.jpg')" }}>
                        <div className='relative top-80 hover:top-0 '>
                        <div className='top-0  bg-[#310742] flex justify-center py-3 font-semibold text-white bg-opacity-70 text-3xl'>SIP</div>
                        <div className='px-4 bg-[#310742] h-full bg-opacity-70 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus quia id minima beatae optio voluptate molestiae, assumenda debitis, possimus suscipit fugit neque fuga aperiam. Eligendi, culpa maxime quaerat adipisci, dolorem impedit velit aut totam rerum natus reprehenderit consequatur cum non minus iste? Rerum, sunt.</div>
                        </div>
                        
                    </div>

                    <div className='overflow-hidden  flex flex-col justify-start  h-96 col-span-3  w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/Initiatives.jpg')" }}>
                        <div className='relative top-80 hover:top-0 '>
                        <div className='top-0  bg-[#310742] flex justify-center py-3 font-semibold text-white bg-opacity-70 text-3xl'>E-Summit</div>
                        <div className='px-4 bg-[#310742] h-full bg-opacity-70 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus quia id minima beatae optio voluptate molestiae, assumenda debitis, possimus suscipit fugit neque fuga aperiam. Eligendi, culpa maxime quaerat adipisci, dolorem impedit velit aut totam rerum natus reprehenderit consequatur cum non minus iste? Rerum, sunt.</div>
                        </div>
                        
                    </div>

                    <div className='overflow-hidden  flex flex-col justify-start  h-96 col-span-3  w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/Initiatives.jpg')" }}>
                        <div className='relative top-80 hover:top-0 '>
                        <div className='top-0  bg-[#310742] flex justify-center py-3 font-semibold text-white bg-opacity-70 text-3xl'>E-Crescendo</div>
                        <div className='px-4 bg-[#310742] h-full bg-opacity-70 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus quia id minima beatae optio voluptate molestiae, assumenda debitis, possimus suscipit fugit neque fuga aperiam. Eligendi, culpa maxime quaerat adipisci, dolorem impedit velit aut totam rerum natus reprehenderit consequatur cum non minus iste? Rerum, sunt.</div>
                        </div>
                        
                    </div>

                    <div className='overflow-hidden  flex flex-col justify-start  h-96 col-span-3  w-auto rounded-lg bg-cover bg-center border-4 border-[#310742]' style={{ backgroundImage: "url('/Initiatives.jpg')" }}>
                        <div className='relative top-80 hover:top-0 '>
                        <div className='top-0  bg-[#310742] flex justify-center py-3 font-semibold text-white bg-opacity-70 text-3xl'>Hult Prize</div>
                        <div className='px-4 bg-[#310742] h-full bg-opacity-70 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus quia id minima beatae optio voluptate molestiae, assumenda debitis, possimus suscipit fugit neque fuga aperiam. Eligendi, culpa maxime quaerat adipisci, dolorem impedit velit aut totam rerum natus reprehenderit consequatur cum non minus iste? Rerum, sunt.</div>
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

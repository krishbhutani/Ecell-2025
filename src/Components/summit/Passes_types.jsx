import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Footer from './Footer'

const Passes_types = () => {
  return (
    <div>
            <div className='bg-[#000000] w-full h-auto'>
                <div className='z-10 sticky top-0 flex justify-between items-center lg:px-9 px-5 py-4 h-16 lg:h-auto backdrop-blur-md bg-cyan-300/10 '>
                    <Link to='/summit'><img className='lg:h-12 md:h-9 my-auto h-8 z-20' src={assets.Ecell_logo} alt="" /></Link>
                    <button className='bg-yellow-400 text-black font-medium text-base px-4 py-1 rounded-sm '><Link to='/summit'>Home</Link></button>
                </div>

                <div className='text-white font-extrabold mt-10  py-6 sm:text-7xl text-3xl flex-col items-center  flex justify-center '>
                    Registration Form

                    <div className='flex flex-col py-12 gap-7'>
                        <button className='bg-yellow-400 text-black font-bold md:text-4xl text-2xl md:px-8 px-4 py-4 sm:mx-0 mx-6 rounded-lg '><Link to='/summit/passes/general'>General Passes </Link></button>
                        <button className='bg-yellow-400 text-black font-bold md:text-4xl text-2xl md:px-8 px-4 py-4 sm:mx-0 mx-6 rounded-lg '><Link to='/summit/passes/mou'>Passes for MOU Signed Colleges</Link></button>
                    </div>


                </div>
                

            </div>
            <Footer />
        </div>
  )
}

export default Passes_types

import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='w-full bg-[#F3F2E3] h-max pb-32'>
            
            <div className='flex pt-16 sm:pt-28 sm:pl-32 pl-5 px-5 sm:px-0'>
                <div className=' w-full sm:w-7/12 m-auto'>
                    <div className=' pb-5 text-3xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text'>Entrepreneurship Cell</div>
                    <div className='pb-5 text-3xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-r from-orange-400 to-violet-800 bg-clip-text'>NIT Hamirpur</div>
                    <div className='text-xl font-bold'>INSPIRING THE ENTREPRENEUR IN YOU</div>
                    <div className='pt-3 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem animi nam minus, nostrum laudantium nihil rerum officia a ipsum cupiditate non incidunt quos, hic saepe. Porro id tenetur unde autem cupiditate esse harum cum. Architecto recusandae amet perferendis laudantium cum quas, possimus earum ex molestias.</div>
                    <button className=' text-white bg-[#310742] hover:bg-[#310756]/90 focus:ring-4 focus:outline-none focus:ring-[#310743]/50 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2'>Dig deeper about E-cell NITH</button>
                </div>
                <div className= 'hidden sm:block w-5/12 py-14'>
                    <img className='w-10/12' src={assets.Header_img} alt="" />
                </div>
            </div>

        </div>

    )
}

export default Header

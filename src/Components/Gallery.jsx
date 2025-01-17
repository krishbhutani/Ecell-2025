import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import img_slider_1 from "../assets/img_slider_1.jpg"
import img_slider_2 from "../assets/img_slider_2.jpg"
import img_slider_3 from "../assets/img_slider_3.jpg"
import img_slider_4 from "../assets/img_slider_4.jpg"
import img_slider_5 from "../assets/img_slider_5.jpg"
import img_slider_6 from "../assets/img_slider_6.jpg"
import img_slider_7 from "../assets/img_slider_7.jpg"
import img_slider_8 from "../assets/img_slider_8.jpg"
import img_slider_9 from "../assets/img_slider_9.jpg"




const Gallery = () => {
        const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

        const handleNext = () => {
            setPositionIndexes((prevIndexes) => {
                const updatedIndexes = prevIndexes.map((prevIndexes) => (prevIndexes + 1) % 5)
                return updatedIndexes
            })
        }

        const images = [
                img_slider_1,
                img_slider_2,
                img_slider_3,
                img_slider_4,
                img_slider_5
                // img_slider_6,
                // img_slider_7,
                // img_slider_8,
                // img_slider_9

        ]


        const positions = [
            'center',
            'left1',
            'left',
            // 'left3',
            // 'left4',
            'right',
            'right1'
            // 'right3',
            // 'right4'
        ]

        const imageVariants = {
            center: { x: '0%', scale: 1, zIndex:5 },
            left: {x: '-50%', scale: 0.7, zIndex: 2 },
            left1: {x: '-90%', scale: 0.5, zIndex: 1 },
            right1: {x: '90%', scale: 0.5, zIndex: 1 },
            right: {x: '50%', scale: 0.7, zIndex: 2 }
            // right3: {x: '0%', scale: 0.7, zIndex: 1 },
            // right4: {x: '0%', scale: 0.7, zIndex: 1 },
            // left3: {x: '0%', scale: 0.7, zIndex: 1 },
            // left4: {x: '0%', scale: 0.7, zIndex: 1 }
        }

        const imageVariants2 = {
            center: { x: '0%', scale: 1, zIndex:5 },
            left: {x: '0%', scale: 0.7, zIndex: 2 },
            left1: {x: '0%', scale: 0.5, zIndex: 1 },
            right1: {x: '0%', scale: 0.5, zIndex: 1 },
            right: {x: '0%', scale: 0.7, zIndex: 2 }
            // right3: {x: '0%', scale: 0.7, zIndex: 2 },
            // right4: {x: '0%', scale: 0.7, zIndex: 2 },
            // left3: {x: '0%', scale: 0.7, zIndex: 2 },
            // left4: {x: '0%', scale: 0.7, zIndex: 2 }
        }

    return (
        <div>
            <div className='w-full  sm:pt-10 pt-5 sm:px-36 px-7'>
                <div className='sm:text-4xl text-3xl font-medium flex items-center gap-3  '>
                    <span className='text-slate-500'>Our</span><span>Gallery</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
                <div className='sm:w-5/12 w-full font-medium font-title text-slate-500'>
                    Step into the vibrant world of E-Cell NIT Hamirpur through our gallery, capturing moments of inspiration, collaboration, and entrepreneurial zeal from our events and initiatives.
                </div>

            </div>

           

            <div className='hidden sm:flex sm:h-96 h-56 my-10  items-center flex-col justify-center '>
                {images.map((image, index) => (
                    
                    <motion.img
                        key={index}
                        src={image}
                        alt={image}
                        className=" rounded-[12px] sm:h-80 object-cover mx-10 sm:w-2/5 w-11/12 "
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute' }} />
                ))}
            </div>

            <div className='sm:hidden  h-56 my-10 flex items-center flex-col justify-center '>
                {images.map((image, index) => (
                    
                    <motion.img
                        key={index}
                        src={image}
                        alt={image}
                        className=" rounded-[12px] sm:h-80 object-cover mx-10 sm:w-2/5 w-11/12 "
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants2}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute' }} />
                ))}
            </div>

            <div className='flex justify-center'>
            <button type="button" className="text-white mt-4 sm:mt-0 bg-[#310742] font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center " onClick={handleNext}>
                        Click here
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
            </div>

                

            <div className='flex sm:flex-row flex-col sm:px-0 px-6 items-center sm:justify-center py-5 bg-[#310742] mt-8'>
                <div className='text-white font-medium text-xl sm:text-3xl mr-3'>Wanna to see something Crazy
                </div>
                {/* <div className='text-yellow-300 pl-2 font-medium text-xl sm:text-3xl mr-3'> Instagram</div> */}
                <div>
                    <button type="button" className="text-black mt-4 sm:mt-0 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center ">
                    <Link to="/coming">Click here</Link>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Gallery

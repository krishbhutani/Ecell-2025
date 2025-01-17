import React from 'react'
import {motion} from "framer-motion"

const Cooper = () => {
  return (
    <div>
      <div className='w-full h-px bg-black'></div>
      <div className="bg-cover bg-center w-full py-10 h-auto flex flex-col lg:px-40  px-10 justify-center items-center" style={{ backgroundImage: "url('/banner.png')" }}>
        <motion.div
        initial = {{opacity:0,translateY: "20%"}}
        whileInView={{opacity:1,translateY:0}}
        transition={{duration: 1}}
        
        className='mb-4'><span className=' text-3xl sm:text-5xl text-[#3C0645] font-extrabold'>Cooperation </span> <span className='text-2xl sm:text-5xl font-bold  '>is culture here</span>
        </motion.div>
        <motion.div
        initial = {{opacity:0,translateY: "20%"}}
        whileInView={{opacity:1,translateY:0}}
        transition={{duration: 1}}

        className='mb-3'>Welcome to our E-Cell, the pulsating heart of innovation and entrepreneurship on campus. Here, we nurture budding entrepreneurs, providing a fertile ground for ideas to flourish and ambitions to soar. From ideation to execution, we offer guidance, resources, and a vibrant community, fostering a culture of innovation and daring exploration. We redefine boundaries, disrupt industries, and shape the future. Encapsulates the essence of sparking ambition, innovation, and drive within individuals to pursue their startup dreams. It signifies the beginning of a journey filled with passion, determination, and creativity, where aspiring entrepreneurs are empowered to turn their ideas into reality and make a meaningful impact in the world of business and innovation.
        </motion.div>
      </div>
      <div className='w-full h-px bg-black'></div>
    </div>
  )
}

export default Cooper


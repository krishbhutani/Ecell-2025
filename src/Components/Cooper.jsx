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

        className='mb-3'>Cooperation is Culture" reflects the essence of building a thriving entrepreneurial ecosystem where collaboration takes precedence over competition. It emphasizes the importance of collective efforts, shared ideas, and mutual support in achieving innovation and success. At E-Cell, we believe that entrepreneurship is not just about individual growth but about fostering a community where ideas, resources, and skills are exchanged freely to create impactful solutions. This theme encourages students to adopt a mindset of teamwork and highlights how a culture of cooperation can pave the way for groundbreaking achievements.
        </motion.div>
      </div>
      <div className='w-full h-px bg-black'></div>
    </div>
  )
}

export default Cooper


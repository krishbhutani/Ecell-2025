import React from 'react'
import "./Card.css"
import { assets } from '../../assets/assets'

const Card = () => {
  return (
    <div className='lg:px-20 sm:px-16 px-12  flex flex-wrap gap-5 gap-y-7 justify-center'>
    {data.map((item, i) => (
      <div className='card relative h-[260px] w-64 border-[1px] rounded-md border-white  overflow-hidden '>
      <div>
        <img className='w-full object-contain ' src={item.img} alt="" />
      </div>
      <div className={`text_content absolute backdrop-blur-sm bg-[#11141192] top-[230px] transition-all duration-500 text-white w-full  flex flex-col items-center`}>
        <div className='font-bold text-lg w-full flex justify-around mb-3'>{item.title}</div>
        <div className='font-normal px-5 mb-4 text-wrap'>{item.subtitle}</div>
      </div>
    </div>

    ))}
    </div>
    
  )
}

export default Card

const data = [
  {
    img: `${assets.Event_1}`,
    title:"hello",
    subtitle:"Krish"

  },

  {
    img: `${assets.Abhinav}`,
    title:"hello",
    subtitle:"Krish"

  },

  {
    img: `${assets.Krish}`,
    title:"hello",
    subtitle:"Krish"

  },
]

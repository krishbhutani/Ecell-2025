import React from 'react'
import "./Card.css"
<style>

</style>

const Card = (props) => {
  const data = 1
  return (
    <div className='card relative h-[260px] w-64 border-[1px] rounded-md border-white  overflow-hidden '>
      <div>
        <img className='w-full object-contain ' src={props.img} alt="" />
      </div>
      <div className={`text_content absolute backdrop-blur-sm bg-[#11141192] top-[230px] transition-all duration-500 text-white w-full  flex flex-col items-center`}>
        <div className='font-bold text-lg w-full flex justify-around mb-3'>{props.title}</div>
        <div className='font-normal px-5 mb-4 text-wrap'>{props.subtitle}</div>
      </div>
    </div>
  )
}

export default Card

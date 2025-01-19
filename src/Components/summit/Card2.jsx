import React from 'react'

const Card2 = (props) => {
  return (
    <div className='h-[310px] w-64 '>
      <div>
        <img className='h-64 w-full object-contain ' src={props.img} alt="" />
      </div>
      <div className='text-white flex justify-center font-semibold'>
        {props.title}
      </div>
      <div className='text-white flex justify-center'>
        {props.post}
      </div>
    </div>
  )
}

export default Card2

import React from 'react'

const Card = (props) => {
  return (
    <div className='h-[300px] w-64 border-[1px] rounded-md border-white p-2'>
      <div>
        <img className='h-64 w-full object-contain ' src={props.img} alt="" />
      </div>
      <div className='text-white flex justify-center font-semibold'>
        {props.title}
      </div>
    </div>
  )
}

export default Card

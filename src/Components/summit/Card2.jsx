import React from 'react'
import { Link} from 'react-router-dom'
import "./Card.css"

const Card2 = (props) => {
  return (
    <div className='h-[310px] w-64 '>
      <div className='relative card overflow-hidden '>
      <img className='h-64 w-full object-cover roun  rounded-lg ' src={props.img} alt=""/>
      <div className='absolute text_content transition-all duration-500  h-64 w-full backdrop-blur-xl flex flex-col justify-center items-center text-black text-2xl font-bold rounded-lg '><Link>Linkedin</Link>  </div>
        
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

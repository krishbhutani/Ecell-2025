import React from 'react'
import { Link} from 'react-router-dom'
import "./Card.css"

const Card2 = (props) => {
  return (
    <div className='h-[310px] w-64 '>
      <div className='relative card overflow-hidden '>
      <img className='h-64 w-full object-cover roun  rounded-lg ' src={props.img} alt=""/>
      <div className='absolute text_content  duration-500  h-64 w-full backdrop-blur-sm bg-[#11141192] flex flex-col justify-center items-center text-white text-3xl font-extrabold rounded-lg '><Link target='_blank' to={props.linkedin}>Linkedin</Link>  </div>
        
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

import React from 'react'

const Cooper = () => {
  return (
    <div>
      <div className='w-full h-px bg-black'></div>
      <div className="bg-cover bg-center w-full h-auto sm:h-56 flex flex-col sm:px-40 px-10 justify-center items-center" style={{ backgroundImage: "url('/banner.png')" }}>
        <div className='mb-4'><span className=' text-3xl sm:text-5xl text-[#3C0645] font-extrabold'>Cooperation </span> <span className='text-2xl sm:text-5xl font-bold  '>is culture here</span></div>
        <div className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus animi dolor, fugiat ex, id sit corrupti necessitatibus quod sunt enim repellat architecto labore! Omnis dolorem nobis culpa dolor a nihil recusandae reprehenderit perspiciatis. Voluptate libero, repudiandae iusto iure repellendus nostrum voluptas dolorum blanditiis sapiente minima atque explicabo numquam id obcaecati omnis quos odio mollitia molestias cumque perspiciatis.</div>
      </div>
      <div className='w-full h-px bg-black'></div>
    </div>
  )
}

export default Cooper


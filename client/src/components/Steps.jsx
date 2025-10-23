import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:40 '>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background <br /> image in seconds</h1>
      <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center '>
        <div className='flex flex-items-center gap-4 bg-white  drop-shadow-md p-7 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9 object-contain' src={assets.upload_icon} alt="" />
          <div className='flex flex-col justify-center'>
            <p className='text-xl font-medium'>Upload Image</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>  
          </div>
        </div>
        <div className='flex flex-items-center gap-4 bg-white  drop-shadow-md p-7 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9 object-contain' src={assets.remove_bg_icon} alt="" />
          <div className='flex flex-col justify-center'>
            <p className='text-xl font-medium'>Remove background</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>  
          </div>
        </div>
        <div className='flex flex-items-center gap-4 bg-white  drop-shadow-md p-7 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9 object-contain' src={assets.download_icon} alt="" />
          <div className='flex flex-col justify-center'>
            <p className='text-xl font-medium'>Download image</p>
            <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later. <br /> This is a demo..</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 mt-10 lg:px-44 sm:mt-20 max-sm:flex-col-reverse gap-y-10">
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background from</span> <br className='max-md:hidden' /> images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" name='' id='upload1' hidden />
          <label className='inline-flex gap-3 px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm text-center p-2'>Upload your Image</p>
          </label>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex justify-center'>
        <img src={assets.header_img} alt="" className="w-[500px] max-w-full h-auto" />
      </div>
    </div>



  )
}

export default Header

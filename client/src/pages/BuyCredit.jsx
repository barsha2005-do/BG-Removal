import React from 'react'
import { assets, plans } from '../assets/assets'

const ByCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-10 mb-14'>
      <button className='button text-blue-500 text-sm border-blue-500 rounded-b-full'>
        Our Plans
      </button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-6 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Choose the plan tha correct for you</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left mt-10 holographic-container'>
        {plans.map((item,index)=>(
          <div className='bg-white drop-shadow-sm  rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500 ' key={index}>
            <img src={assets.logo_icon} alt="" />
            <p className='mt-3 font-semibold'>{item.id}</p>
            <p className='text-sm'> {item.desc} </p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${item.price}
              </span>/{item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py2.5 min-w-52 button'>Purchase</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ByCredit
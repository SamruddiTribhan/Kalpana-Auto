import React from 'react'
import {companies} from '../constants/index.jsx'


const HeroSection = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Extensive expertise across all &nbsp;
      <span className='bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text'> 
     Types of bikes </span>
     
    </h1>
    <p className='mt-10 text-center text-lg text-neutral-500 max-w-4xl'>
    Over the years, we have restored, modified, and serviced a wide range of bikes, gaining extensive expertise in each type. Our skills cover road bikes, mountain bikes, hybrids, and electric bikes, allowing us to address various mechanical issues and enhance performance, ensuring that every bike receives the quality care it deserves for safe and enjoyable riding.

    </p>

    <div className="grid mt-10 grid-cols-4 lg:grid-cols-6">
      {companies.map((bike,index)=>(
        <div key={index} className="size-20 lg:size-32 p-4 m-3  lg:mx-8 border border-neutral-300 rounded-lg">
        <img src={bike.image} alt="" /></div>
      ))}
    </div>

   
    
   </div>
  )
}

export default HeroSection
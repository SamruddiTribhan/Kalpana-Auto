import React from 'react'
import {  whyChooseUs } from '../constants'; 

const Featuresection = () => {
    return (
      <div className=" relative min-h-[800px]">
      
       
        
        <div className="text-center mt-20">
       
          <h2 className='mt-10 text-3xl sm:text-5xl lg:text-6xl'>
            Why&nbsp;
            <span className='bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text'>
              Choose Us
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {whyChooseUs.map((item, key) => (
            <div key={key} className="w-1/2 sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 justify-center items-center bg-neutral-900 rounded-full size-10 text-red-500">
                  {/* Directly render the icon here */}
                  {item.icon}
                </div>
                <div>
                  <h5 className="mt-0.5 mb-6 text-md sm:text-lg">{item.text}</h5>
                  <p className='text-sm sm:text-base text-neutral-500 mb-20 p-1'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Featuresection;
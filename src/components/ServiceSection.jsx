import React from 'react';
import { service } from '../constants';

const ServiceSection = () => {
    return (
      <section className="bg-gradient-to-black from-gray-800 via-gray-900 sm:mt-20 to-black py-16">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl sm:mb-20 mb-12 lg:text-7xl text-center tracking-wide">
    Our &nbsp;
      <span className='bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text'> 
    Services </span>
     
    </h1>
          <div className="grid lg:gap-10 gap-1 grid-cols-2 lg:grid-cols-3">
            {service.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 bg-opacity-30 hover:bg-opacity-50 rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-3xl lg:text-6xl mb-5 text-gray-400 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h5 className="lg:text-xl text-xs font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h5>
                <p className="text-gray-400 text-[0.5rem] sm:text-sm">{feature.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ServiceSection;

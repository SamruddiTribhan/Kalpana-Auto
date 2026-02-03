import React from 'react';
import image1 from '../assets/image1.jpg';
import Navbar from './Navbar2';
import logo2 from '../assets/logo2.png';
import { Link } from 'react-router-dom';

const Bikebg = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-top lg:bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 lg:from-black/70 lg:to-black/50"></div>
      <Navbar />
      <div className="flex absolute lg:left-0 h-screen z-10">
        <div className="w-full flex items-center space-y-6 flex-col text-center px-4">
          <h2 className="text-xl ml-4 font-roboto-slab mt-44 text-white">
            The Quality is beyond excellence
          </h2>
          <h1 className="text-6xl bg-gradient-to-r from-red-900 to-red-600 text-transparent bg-clip-text font-semibold">
            Restore & Repair
          </h1>
          <h2 className="text-3xl text-white">Your Bike Now!</h2>
          <Link to={"/BookService"}>
          <button
            className="rounded-lg border border-red-700 px-4 py-3 text-white hover:bg-red-700 transition"
            aria-label="Book Now" 
          >
            Book Service Now 
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Bikebg;

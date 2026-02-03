import React, { useState } from 'react'
import logo from './assets/logo.png'
import {navItems} from './constants/index.jsx'
import {Menu,X} from 'lucide-react'

const Navbar = () => {
   let [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

   const toggleNavbar = ()=>{
      setMobileDrawerOpen(!mobileDrawerOpen)
   };

  return (
  <nav className='sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-neutral-700/80'>
  <div className="container px-4 relative mx-auto text-sm">
    <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
            <img className="size-10 mr-2" src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>VirtualR</span>
        </div>
        <ul className='hidden lg:flex ml-14 space-x-12 '>
            {navItems.map((item,index)=>(
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}


        </ul>

        <div className="hidden lg:flex items-center justify-center space-x-12">
            <a href="#" className='rounded-md px-3 py-2 border '> Sign-In</a>
            <a href="#" className='rounded-md px-3 py-2 bg-gradient-to-r from-orange-500  to-orange-800'>Create an account</a>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen? <X/> : <Menu/> }
            </button>
        </div>
        </div>

        {mobileDrawerOpen && (
            <div className="fixed right-0 bg-neutral-900 w-full p-12 z-20 items-center flex flex-col justify-center  lg:hidden">
                <ul>
                    {navItems.map((items,index)=>(
                        <li key={index} className='py-4'>
                               <a href={items.href}>{items.label}</a>
                        </li>
                     
                    ))}
                </ul>
                <div className='flex space-x-6'>
        <a href="#" className='rounded-md px-3 py-2 border '> Sign-In</a>
        <a href="#" className='rounded-md px-3 py-2 bg-gradient-to-r from-orange-500  to-orange-800'>Create an account</a>
        </div>
            </div>
        )} 

       
    </div>

  </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import logo from '../assets/logo2.png'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    let [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

    return (
        <nav className='sticky top-0  z-50 py-0 '>
            <div className="container px-4 relative mx-auto text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="size-20 mr-2" src={logo} alt="logo" />
                        <span className='text-xl bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text font-medium font-roboto-slab tracking-tight'>KALPANA AUTO</span>
                    </div>
                    <ul className='hidden lg:flex ml-6 [&>*]:text-lg space-x-12 '>

                    <li>  <NavLink  className="navbarLink" to="/">Home</NavLink></li>
                    <li>  <NavLink  className="navbarLink" to="/aboutUs">About Us</NavLink></li>
                    <li>  <NavLink  className="navbarLink" to="/contactUs">Contact Us</NavLink></li>
                    </ul>

                    <div className="hidden lg:flex items-center justify-center space-x-4">

                        <a href="#" className="text-red-600 hover:text-red-900">
                            <i className="fab fa-twitter"></i>
                        </a>


                        <a href="#" className="text-red-700 hover:text-red-900">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a href="#" className="text-red-500 hover:text-red-900">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className="fixed right-0 bg-neutral-900 w-full p-8 z-20 items-center flex flex-col justify-center  lg:hidden">
                        <ul className='[&>*]:py-4'>
                        <li>  <NavLink  to="/">Home</NavLink></li>
                        <li>  <NavLink   to="/aboutUs">About Us</NavLink></li>
                        <li>  <NavLink  c to="/contactUs">Contact Us</NavLink></li>
                        </ul>
                        <div className='flex pt-6 space-x-6'>
                            <a href="#" className="text-red-600 hover:text-blue-500">
                                <i className="fab fa-twitter"></i>
                            </a>


                            <a href="#" className="text-red-700 hover:text-blue-500">
                                <i className="fab fa-facebook"></i>
                            </a>

                            <a href="#" className="text-red-600 hover:text-blue-500">
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>
                    </div>
                )}


            </div>

        </nav>
    )
}

export default Navbar
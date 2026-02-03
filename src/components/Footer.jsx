import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
    return (
        <div className="md:py-12 md:px-8 py-8 px-4 text-center mt-6">
             
           

           

            <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 mt-4 md:mt-6 text-[#D9D9D9]">
                <div className="flex items-center space-x-1 md:space-x-2">
                    <Phone className="md:size-5 size-3 " />
                    <span className="text-[10px] md:text-[18px] bg-gradient-to-r text-transparent bg-clip-text from-white to-gray-400  animate-pulse font-[anta]">9850728207</span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                    <Mail className="md:size-5  size-3" />
                    <span className="text-[10px] md:text-[21px] bg-gradient-to-r text-transparent bg-clip-text from-white to-gray-400 animate-pulse font-[anta] break-words text-center sm:text-left max-w-[80vw] sm:max-w-none">
                        pramodthorat@gmail.com
                    </span>
                </div>
            </div>

            <div className="flex justify-center gap-8 mt-6 text-[#D9D9D9]">
                <FaTwitter className="lg:size-5 cursor-pointer hover:text-red-600 transition" />
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="lg:size-5 cursor-pointer hover:text-red-600 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="lg:size-5 cursor-pointer hover:text-red-600 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="lg:size-5 cursor-pointer hover:text-red-600 transition" />
                </a>
            </div>
            
     
            <Link to="/adminPanel">
                <p className="font-montserrat text-gray-200  md:py-6 py-3 text-xs md:text-sm">
                  Owned by &nbsp;
                <span className='text-2xl bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text font-medium font-roboto-slab tracking-tight'>Pramod Thorat</span>                </p>
            </Link>
            <p className="font-montserrat text-[#999999] text-[10px] md:text-sm">
                Visit Us At <span className="font-montserrat  text-white">Opposite of Loni Bus stand, Loni bk., Rahata, Ahilyanagar</span>
            </p>
        </div>
    );
};

export default Footer;

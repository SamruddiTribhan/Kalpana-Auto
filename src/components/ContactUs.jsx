import React from 'react';
import Navbar from './Navbar2';
import Footer from './Footer';

const ContactUs = () => {
    const contactDetails = [
        {
            icon: "fas fa-map-marker-alt",
            title: "Our Garage",
            content: "HFH9+7CH, opp. BUS STAND, Loni, Loni Bk., Maharashtra 413736",
        },
        {
            icon: "fa-solid fa-phone",
            title: "Our Contact",
            content: "+91 98507 28207",
        },
        {
            icon: "fa-solid fa-envelope",
            title: "E-MAIL",
            content: "pramodthorat@gmail.com",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="flex mt-20 justify-evenly flex-wrap gap-5">
                {contactDetails.map((detail, index) => (
                    <div
                        key={index}
                        className="w-60 sm:w-80 bg-white flex flex-col items-center justify-evenly p-5 shadow-md rounded-lg"
                    >
                        <i
                            className={`${detail.icon} bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text text-2xl sm:text-6xl`}
                            aria-label={detail.title}
                        ></i>
                        <h2 className="text-black sm:text-base text-xs font-bold">
                            {detail.title}
                        </h2>
                        <span className="text-gray-800 sm:p-3 sm:text-sm text-[0.75rem] text-center">
                            {detail.content}
                        </span>
                    </div>
                ))}
            </div>

            <div className='m-10'>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Visit&nbsp;
                    <span className='bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text'>
                        Us </span>
                </h1>
                <div className="flex justify-center mt-10">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4812131783876!2d74.46854810208441!3d19.57822017556017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf7f7126d5883%3A0xe5ef81c88fd2112c!2sKalpana%20Auto%20(HFH9%2B7CH%2C%20opp.%20BUS%20STAND%2C%20Loni%2C%20Maharashtra%20413736)!5e0!3m2!1sen!2sin!4v1699804779112!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        className="border-0 rounded-lg shadow-md"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Button for Directions */}
                <div className="flex justify-center mt-5">
                    <a
                        href="https://www.google.com/maps/place/Kalpana+Auto/@19.5780303,74.4683418,21z/data=!4m10!1m2!2m1!1sHFH9%2B7CH,+opp.+BUS+STAND,+Loni,+Loni+Bk.,+Maharashtra+413736!3m6!1s0x3bdcf7f7126d5883:0xe5ef81c88fd2112c!8m2!3d19.5782172!4d74.468552!15sCjxIRkg5KzdDSCwgb3BwLiBCVVMgU1RBTkQsIExvbmksIExvbmkgQmsuLCBNYWhhcmFzaHRyYSA0MTM3MzaSARZtb3RvcmN5Y2xlX3JlcGFpcl9zaG9w4AEA!16s%2Fg%2F11ssylyyc5?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-red-800 transition duration-200"
                    >
                        Get Directions
                    </a>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ContactUs;

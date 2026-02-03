import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [customerCount, setCustomerCount] = useState(0);
    const [bookingCount , setBookingCount] = useState(0);

    useEffect(() => {
        fetch('https://projectk-backend.onrender.com/count')
            .then((res) => res.json())
            .then((data) => {setCustomerCount(data.count) , setBookingCount(data.bookingCount)})
            .catch((err) => console.error("Error fetching customer count:", err));
    }, []);

    const contactDetails = [
        { 
            icon: "fa-solid fa-users",
            title: "Customers",
            content: customerCount,  
            link:"bikes",
        },
        { 
            icon: "fa-solid fa-headset",
            title: "Bookings",
            content: bookingCount,
            link:"bookings"
        },
        { 
            icon: "fa-solid fa-warehouse",
            title: "Inventory",
            content: "0",
            link:"inventory",
        },
    ];

    return (
        <>
            <div className="h-[calc(100vh-310px)] md:h-[calc(100vh-400px)] flex items-center justify-center">
                <div className="flex justify-evenly flex-wrap gap-5">
                    {contactDetails.map((detail, index) => (
                        <Link to={`/${detail.link}`}>
                        <div
                            key={index}
                            className="w-60 sm:w-80 bg-white flex flex-col items-center justify-evenly p-5 shadow-md rounded-lg"
                        >
                            <i
                                className={`${detail.icon} bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text text-4xl sm:text-6xl`}
                                aria-label={detail.title}
                            ></i>
                            <h2 className="text-black sm:text-base text-xs font-bold">
                                {detail.title}
                            </h2>
                            <span className="text-gray-800 sm:p-3 sm:text-lg text-[0.85rem] text-center">
                                {detail.content}
                            </span>
                        </div></Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;

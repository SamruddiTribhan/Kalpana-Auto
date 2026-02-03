import React, { useState } from 'react';
import Navbar from './Navbar2';

const BookService = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [bike, setBike] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const collectData = async (e) => {
    e.preventDefault();
    console.log({ name, email, contact, bike, service });

    setSubmitted(true);
    setName("");
    setEmail("");
    setContact("");
    setBike("");
    setService("");

    let result = await fetch("https://projectk-backend.onrender.com/bookService", {
      method: 'post',
      body: JSON.stringify({ name, email, contact, bike, service }),
      headers: {
        'content-type': 'application/json'
      }
    });

    result = await result.json();
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black py-10 px-4">
        <form onSubmit={collectData} className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl text-red-500 sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Book a Service</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone No</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bike" className="block text-gray-700 font-semibold mb-2">Bike Model</label>
            <input
              type="text"
              id="bike"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your bike model"
              value={bike}
              onChange={(e) => setBike(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service Needed</label>
            <input
              type="text"
              id="service"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Service needed"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
          >
            Book Now
          </button>

          {submitted && (
            <p className="mt-4 text-green-500 font-semibold text-center">Service booked successfully!</p>
          )}
        </form>
      </div>
    </>
  );
};

export default BookService;

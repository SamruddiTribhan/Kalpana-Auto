import React, { useState } from 'react';
import Navbar from './AdminNav';
import { useNavigate } from 'react-router-dom';

const AddBike = () => {
  const [bikeNo, setBikeNo] = useState("");
  const [owner, setOwner] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dateOfReg, setDateOfReg] = useState("");
  const [message, setMessage] = useState(""); // State to store success or error messages

  const navigate = useNavigate(); 

  const handleAddBike = async (e) => {
    e.preventDefault();

    setMessage(""); // Reset message on new submission

    try {
      let result = await fetch("https://projectk-backend.onrender.com/addBike", {
        method: 'POST',
        body: JSON.stringify({ bikeNo, owner, contactNo, dateOfReg }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let response = await result.json();

      if (result.status === 400) {
        setMessage("Bike already exists!"); // Handle duplicate error
      } else if (result.status === 201) {
        setMessage("Bike added successfully!");
        setBikeNo("");
        setOwner("");
        setContactNo("");
        setDateOfReg("");

        setTimeout(() => navigate("/adminPanel"), 1500); // Redirect after success
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black py-10 px-4">
        <form onSubmit={handleAddBike} className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-500 sm:mb-6 text-center">Add Bike</h2>

          <div className="mb-4">
            <label htmlFor="bikeNo" className="block text-gray-700 font-semibold mb-2">Bike Number</label>
            <input
              type="text"
              id="bikeNo"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the bike number"
              value={bikeNo}
              onChange={(e) => setBikeNo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="owner" className="block text-gray-700 font-semibold mb-2">Owner</label>
            <input
              type="text"
              id="owner"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the owner's name"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-gray-700 font-semibold mb-2">Contact Number</label>
            <input
              type="tel"
              id="contactNo"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfReg" className="block text-gray-700 font-semibold mb-2">Date Of Registration</label>
            <input
              type="date"
              id="dateOfReg"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the date of Registration"
              value={dateOfReg}
              onChange={(e) => setDateOfReg(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
          >
            Add Bike
          </button>

          {message && (
            <p className={`mt-4 font-semibold text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default AddBike;

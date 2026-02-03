import React, { useState } from 'react';
import Navbar from './Navbar2';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // let result = await fetch("https://projectk-backend.onrender.com/adminLogin", {
    //   method: 'post',
    //   body: JSON.stringify({  name, password }), // Corrected variable
    //   headers: {
    //     'content-type': 'application/json'
    //   }

    if(name === "admin" && password === "admin123"){
    navigate("/adminPanel");
    } else {
    setError("Please enter valid login details");
    }
  };

    });

    result = await result.json();
    if (result.name) {
      localStorage.setItem("user@Admin", JSON.stringify(result));
      navigate("/adminPanel");
    } else {
      setError("Please enter valid login details"); // Display error message
    }

    setName("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black py-10 px-4">
        <form onSubmit={handleLogin} className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl text-red-600 sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Admin Login</h2>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
          >
            Login
          </button>

          {error && (
            <p className="mt-4 text-red-500 font-semibold text-center">{error}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default AdminLogin;

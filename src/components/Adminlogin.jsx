import React, { useState } from 'react';
import Navbar from './Navbar2';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Demo login (frontend only)
  const handleLogin = (e) => {
    e.preventDefault();

    if (name === "admin" && password === "admin123") {
      localStorage.setItem("user@Admin", JSON.stringify({ name: "admin" }));
      navigate("/adminPanel");
    } else {
      setError("Please enter valid login details");
    }

    setName("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black py-10 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-xl text-red-600 sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Admin Login
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-700"
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

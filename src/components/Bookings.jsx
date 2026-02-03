import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://projectk-backend.onrender.com/bookings"); // Ensure this endpoint exists in your backend
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <AdminNav />
      <div className="container mx-auto p-4 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        {loading && <p>Loading bookings...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 min-w-max">
            <thead>
              <tr className="bg-gray-900">
                <th className="border p-2">S.No</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Contact</th>
                <th className="border p-2">Bike</th>
                <th className="border p-2">Service</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="border">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{booking.name}</td>
                  <td className="border p-2">{booking.email}</td>
                  <td className="border p-2">{booking.contact}</td>
                  <td className="border p-2">{booking.bike}</td>
                  <td className="border p-2">{booking.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Bookings;

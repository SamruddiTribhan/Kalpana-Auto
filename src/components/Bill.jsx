import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo2.png';
import { companies } from "../constants/index";

const Bill = () => {
  const { bikeId, serviceId } = useParams();
  const [bill, setBill] = useState({ entries: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newEntry, setNewEntry] = useState({ description: '', amount: '', quantity: '' });

  const [ownerName, setOwnerName] = useState("");
  const [bikeNo, setbikeNo] = useState("");

  useEffect(() => {
    fetchBill();
  }, [bikeId, serviceId]);

  const fetchBill = async () => {
    try {
      const response = await axios.get(`https://projectk-backend.onrender.com/adminPanel/bikes/${bikeId}/${serviceId}/bill`);
      setBill(response.data);
      setOwnerName(response.data.owner);
      setbikeNo(response.data.bikeNo);
      setLoading(false);
    } catch (err) {
      setError("Error fetching bill details.");
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const addEntryToBill = async () => {
    try {
      const response = await axios.post(`https://projectk-backend.onrender.com/adminPanel/bikes/${bikeId}/${serviceId}/bill/entry`, {
        description: newEntry.description,
        amount: parseFloat(newEntry.amount),
        quantity: parseInt(newEntry.quantity, 10),
      });
      setBill((prevBill) => ({
        ...prevBill,
        entries: [...prevBill.entries, response.data],
      }));
      setNewEntry({ description: '', amount: '', quantity: '' });
    } catch (err) {
      console.error("Error adding entry:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Calculate total amount
  const totalAmount = bill?.entries.reduce(
    (total, entry) => total + entry.amount * entry.quantity,
    0
  );

  // Create array for default rows, filling empty entries up to five if necessary
  const displayedEntries = [...bill.entries];
  while (displayedEntries.length < 5) {
    displayedEntries.push({ description: '', quantity: '', amount: '' });
  }

  const printBill = () => {
    window.print();
  }

  return (
    <>
      <div className="container text-black sm:bg-white mx-auto p-4">
        <div className="mt-6">
          <h2 className="sm:text-xl text-white sm:text-black heading font-semibold mb-2">Add New Entry</h2>
          <input
            type="text"
            name="description"
            placeholder="Part"
            value={newEntry.description}
            onChange={handleInputChange}
            className="border text-xs sm:text-xl p-0.5"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newEntry.amount}
            onChange={handleInputChange}
            className="border text-xs sm:text-xl p-0.5"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={newEntry.quantity}
            onChange={handleInputChange}
            className="border text-xs sm:text-xl p-0.5"
          />
          <button onClick={addEntryToBill} className="bg-blue-500 text-white sm:px-4 sm:py-2 p-0.5 ml-2 rounded">
            Add Entry
          </button>
        </div>

        <div className="p-6 bg-white border text-black rounded-lg shadow-md mt-4">
          <div className="flex justify-between">
            <div className="flex items-center flex-shrink-0">
              <img className="size-14 sm:size-32 mr-2" src={logo} alt="logo" />
              <span className="company-name sm:text-2xl text-sm bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text font-medium font-roboto-slab tracking-tight">KALPANA AUTO</span>
            </div>
            <div className="flex flex-col">
              <span className="owner-name sm:text-2xl text-sm bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text font-medium font-roboto-slab tracking-tight">Pramod Thorat</span>
              <p className="text-xs sm:text-base">In front of Bus Stand<br />Loni, Rahata<br />Contact: 9850728207</p>
            </div>
          </div>

          <hr />

          <div className='min-h-fit'>
            <h1 className="sm:text-2xl text-xl mt-3 font-bold mb-4"> {ownerName} - {bikeNo}</h1>
            {bill ? (
              <>
                <p><strong>Bill Date:</strong> {new Date(bill.billDate).toLocaleString()}</p>

                <table className="w-full border-collapse border border-gray-400 mt-4">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 text-xs sm:text-sm px-4 py-2">Sr.No.</th>
                      <th className="border border-gray-400 text-xs sm:text-sm px-4 py-2">Parts</th>
                      <th className="border border-gray-400 text-xs sm:text-sm px-4 py-2">Quantity</th>
                      <th className="border border-gray-400 text-xs sm:text-sm px-4 py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedEntries.map((entry, index) => (
                      <tr key={index}>
                        <td className="border border-gray-400 text-xs lg:text-sm px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-400 text-xs lg:text-sm px-4 py-2">{entry.description || '-'}</td>
                        <td className="border border-gray-400 text-xs sm:text-sm px-4 py-2">{entry.quantity || '-'}</td>
                        <td className="border border-gray-400 text-xs sm:text-sm px-4 py-2">{entry.amount ? entry.amount * entry.quantity : '-'}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="border border-gray-400 text-xs sm:text-sm px-4 py-2 font-semibold">Total</td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 text-xs sm:text-sm px-4 py-2 font-semibold" colSpan="2">{totalAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <p>No bill data available.</p>
            )}

            <br /><br />
            <hr />
          </div>
          <div>
            <h1 className='text-sm lg:text-lg'>Extensive expertise across all types of bikes.</h1>
            <div className="grid lg:mt-10 mt-5 grid-cols-12 lg:grid-cols-12">
              {companies.map((bike, index) => (
                <div key={index} className="size-5 lg:size-20 lg:p-2 lg:m-3 lg:mx-8 border border-neutral-300 rounded-lg">
                  <img src={bike.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 py-2 px-4 bg-red-600 heading w-fit text-white rounded" onClick={printBill}>Print Bill</div>

      </div>
    </>
  );
};

export default Bill;

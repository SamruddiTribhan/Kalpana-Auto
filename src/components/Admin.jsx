import React from 'react'
import Navbar from './AdminNav'
import DisplayBikes from './DisplayBikes';
import Dashboard from './Dashboard';

const Admin = () => {
  return (
    <>
    <Navbar></Navbar>
    <Dashboard/>
    {/* <DisplayBikes></DisplayBikes> */}
    </>
  )
}

export default Admin
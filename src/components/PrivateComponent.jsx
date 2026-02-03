import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const PrivateComponent = () => {
    const auth =localStorage.getItem('user@Admin')
  return auth ? <Outlet/> : <Navigate to={'adminLogin'}/>
}

export default PrivateComponent;
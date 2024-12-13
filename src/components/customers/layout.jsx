import React from 'react'
import Navbar from '../../components/customers/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

function Layout() {
  return (
    <div>
      <Navbar/>
   
        <Outlet />
      
      <Footer/>
    </div>
  )
}

export default Layout
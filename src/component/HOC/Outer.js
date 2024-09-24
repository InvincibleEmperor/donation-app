import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'

const Outer = ({ children }) => {
  return (
    <div>
      <Header/>
      {/* <Navbar /> */}
      {children}
      <Footer/>
    </div>
  )
}

export default Outer

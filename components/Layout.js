import Navbar from './Navbar'
import Footer from './Footer'
import React, { forwardRef, useRef } from 'react'

export default function Layout({ children }) {

  return (
    <>
      <Navbar/>
      {/* <Navbar class="sticky top-0 z-50"/> */}
      <main>{children}</main>
      {/* <main class="relative">{children}</main> */}

      <Footer/>
    </>
  )
}
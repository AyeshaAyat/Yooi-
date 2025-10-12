import React from 'react'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default RootLayout
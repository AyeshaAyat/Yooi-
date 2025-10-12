import Home from "../pages/Home"
import Navbar from '../layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'


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
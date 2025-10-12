
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Login from './components/pages/Login'

function App() {


  return (
 <>
 <Routes>
  <Route path='/' element={<RootLayout/>}>
  <Route index element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  </Route>
 </Routes>
 </>
  )
}

export default App

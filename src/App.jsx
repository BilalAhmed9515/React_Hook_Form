import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact_Us from './Components/Contact_Us/Contact_Us'
import Navbar from './Components/Navbar/Navbar'
import Form from './Components/Contact_Us/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='contactus' element={<Contact_Us/>}/>
      <Route path='form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Header from './components/Header';
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App

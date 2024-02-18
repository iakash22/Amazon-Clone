import React from 'react'
import './App.css'
import Header from './components/Header';
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Checkout from './components/Checkout'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      
    </>
  )
}

export default App

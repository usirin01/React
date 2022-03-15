import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navs from './components/Navs'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App

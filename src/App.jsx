import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Sidebar from './components/sidebar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import AddStudent from './components/pages/home-page/AddStudent'
import View from './components/pages/home-page/View'
import Edit from './components/pages/home-page/Edit'

export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/add' element={<AddStudent />} />
          <Route path='/Edit/:id' element= {<Edit />} />
          <Route path='/View/:id' element= {<View />} />

        </Routes>
      </div>
    </div>
  )
}

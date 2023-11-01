import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  Home from "./pages/home/Home.jsx"
function App() {
  return (
     <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App

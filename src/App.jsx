import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import UserFrom from './components/UserFrom'
import ReadData from './components/ReadData'
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<NavBar />} />
          <Route path='/userDetail' element={<UserFrom />} />
          <Route path='/readData' element={<ReadData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Months from '../components/Months'
import Date from '../components/Months'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/month" element={<Date />} />
        <Route path="/" element={<Months />} />
      </Routes>
    </div>
  )
}

export default Allroutes

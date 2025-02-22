import React from 'react'
import Months from '../components/Months'
import Date from '../components/Date'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return  (
    <div>
       <Months />
      <Routes>
        <Route path="/:month" element={<Date />} />
      </Routes>
    </div>
  )
}

export default Allroutes

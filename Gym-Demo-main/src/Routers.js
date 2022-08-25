import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import DesriptionPage from './Pages/DescriptionPage/DesriptionPage'
import Error from './Components/common/Error'
import Home from './Pages/Home'

const Routers = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/gym-desc' element={<DesriptionPage />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Navigate to='/error' /> } />
        </Routes>
    </>
  )
}

export default Routers

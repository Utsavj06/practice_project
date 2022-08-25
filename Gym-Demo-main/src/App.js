import React from 'react'
import { useLocation } from 'react-router-dom'
import Routers from './Routers'
import Footer from './Components/Footer'

const App = () => {
  const location = useLocation();
  return (
    <div className='App'>
      <Routers />
      {location.state && <Footer />}
    </div>
  )
}

export default App
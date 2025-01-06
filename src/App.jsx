
import { Outlet } from 'react-router-dom'

import Navbar from './pages/shared/navbar/Navbar'
import Footer from './pages/shared/footer/Footer'

function App() {


  return (
    <>
      <div >

        <Navbar className='container mx-auto' />
        <Outlet />
        <Footer/>

      </div>
    </>
  )
}

export default App

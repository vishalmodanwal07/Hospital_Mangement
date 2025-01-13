import {Outlet} from 'react-router-dom'
import { NavbarSimple } from './NavbarSimple'
import { Footer } from './Footer'



function Layout() {
  return (
    <div>
        <NavbarSimple/>
        <div className="flex-1 bg-gray-100 p-6 h-screen">
        <Outlet /> {/* Renders child routes dynamically */}
        </div>
        <Footer/>
     </div>
  )
}

export default Layout

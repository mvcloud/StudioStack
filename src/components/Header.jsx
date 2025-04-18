import React, {useState} from 'react'
import Hamburger from 'hamburger-react'
import StudioStack from '../assets/StudioStack.png'
import { NavLink, useLocation } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";

function Header({ isAdmin, logOut }) {

  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  
  const AdminHeader = () => {
    return (
      <div className='text-white hidden md:flex space-x-8 underline-offset-3'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Home</NavLink>
      <NavLink to="/calendar" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Calendar</NavLink>
      <NavLink to="/reservations" className={({ isActive }) => isActive || ["/create-reservation", "/check-in-out"].includes(pathname) ? 'font-bold' : 'font-light hover:underline'}>Reservations</NavLink>
      <NavLink to="/reports" className={({ isActive }) => isActive || ["/create-report", "/report-summary"].includes(pathname) ? 'font-bold' : 'font-light hover:underline'}>Reports</NavLink>
      <NavLink to="/statistics" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Statistics</NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Teams</NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Users</NavLink>
      <NavLink to="/inventory" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Inventory</NavLink>
      <NavLink to="/">
        <IoIosLogOut onClick={logOut} color='white' className='w-7 h-7 cursor-pointer'/>
      </NavLink>
      </div>
    )
  }

  const StudentHeader = () => {
    return (
      <div className='text-white hidden md:flex space-x-8'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Home</NavLink>
      <NavLink to="/calendar" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Calendar</NavLink>
      <NavLink to="/reservations" className={({ isActive }) => isActive || ["/create-reservation", "/check-in-out"].includes(pathname) ? 'font-bold' : 'font-light hover:underline'}>Reservations</NavLink>
      <NavLink to="/reports" className={({ isActive }) => isActive || ["/create-report", "/report-summary"].includes(pathname) ? 'font-bold' : 'font-light hover:underline'}>Reports</NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Teams</NavLink>
      <NavLink to="/inventory" className={({ isActive }) => isActive ? 'font-bold' : 'font-light hover:underline'}>Inventory</NavLink>
      <NavLink to="/">
        <IoIosLogOut onClick={logOut} color='white' className='w-7 h-7 cursor-pointer'/>
      </NavLink>
      </div>
    )
  }

  return (
    <nav className='bg-[#426276] p-4'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div>
          <img className="p-2" src={StudioStack} alt="StudioStack"/>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
        </div>

        {/* Links */}
        {isAdmin ? <AdminHeader/> : <StudentHeader/>}
      </div>

      {/* Dropdowns */}
      {isOpen && isAdmin ? (
        <div className="text-white flex flex-col md:hidden space-y-2 ml-2">
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Home</NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Calendar</NavLink>
          <NavLink to="/reservations" className={({ isActive }) => isActive || ["/create-reservation", "/check-in-out"].includes(pathname) ? 'font-bold' : 'font-light'}>Reservations</NavLink>
          <NavLink to="/reports" className={({ isActive }) => isActive || ["/create-report", "/report-summary"].includes(pathname) ? 'font-bold' : 'font-light'}>Reports</NavLink>
          <NavLink to="/statistics" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Statistics</NavLink>
          <NavLink to="/teams" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Teams</NavLink>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Users</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Inventory</NavLink>
          <IoIosLogOut onClick={logOut} color='white' className='w-7 h-7 cursor-pointer'/>
      </div>
      ): null}
      {isOpen && !isAdmin ? (
        <div className="text-white flex flex-col md:hidden space-y-2 ml-2">
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Home</NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Calendar</NavLink>
          <NavLink to="/reservations" className={({ isActive }) => isActive || ["/create-reservation", "/check-in-out"].includes(pathname) ? 'font-bold' : 'font-light'}>Reservations</NavLink>
          <NavLink to="/reports" className={({ isActive }) => isActive || ["/create-report", "/report-summary"].includes(pathname) ? 'font-bold' : 'font-light'}>Reports</NavLink>
          <NavLink to="/teams" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Teams</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => isActive ? 'font-bold' : 'font-light'}>Inventory</NavLink>
          <IoIosLogOut onClick={logOut} color='white' className='w-7 h-7 cursor-pointer'/>
      </div>
      ): null}
    </nav>
  )
}

export default Header;
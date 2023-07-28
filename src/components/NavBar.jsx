import React from 'react'
import Logo from '../assets/logo.svg'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
export default function NavBar() {
    const navigate=useNavigate();

  return (
    <div className="w-[90%] m-auto flex flex-col items-center justify-around">
        <div onClick={()=>navigate('/')}>
            <img className="md:h-20 m-2 cursor-pointer" src={Logo} alt='Logo'/>
        </div>
        <div className="w-[70%] md:w-1/3 flex justify-around my-2 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/newsletter'>Newsletter</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

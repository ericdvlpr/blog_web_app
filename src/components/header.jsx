import React from 'react'
import logo from '../assets/images/logo.png'
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from "react-router";


function Header() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-[180px]" onClick={()=>navigate('/')}/>
     
      
    </div>
  )
}

export default Header
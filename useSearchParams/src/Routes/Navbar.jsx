import React from 'react'
import { NavLink } from "react-router-dom";
import '../Navbar.css'

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      background: "lightgray",
      padding: "10px",
    }}>
        <NavLink to="" style={(e)=>e.isActive ? {color:"blue"} : {color:"white"}}>Home</NavLink><br />
    <NavLink to="/product" style={(e)=>e.isActive ? {color:"blue"} : {color:"white"}}>Product</NavLink> <br />
   
    </div>
  )
}

export default Navbar
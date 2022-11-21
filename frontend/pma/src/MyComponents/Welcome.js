import React from 'react'
import "./Welcome.css"
import {

  NavLink
} from "react-router-dom";

export const Welcome = () => {
  return (
    <>
    <div className='wcenter'>
        <h1>Welcome</h1>
        <h1>TO</h1>
        <h1 className='heading'>Project Management App</h1>
        <NavLink to="/login" className="navlink">Login</NavLink>
    </div>
    {/* <div className='wccenter2'>
        <NavLink to="/login" className="navlink">Login</NavLink>

    </div> */}
    </>
  )
}

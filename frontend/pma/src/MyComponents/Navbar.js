import React from 'react'


import {

    NavLink
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand" >Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" >contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/registration" className="nav-link">registration</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>





        </>
    )
}

export default Navbar



// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export const Navbar = () => {
//   return (
//     <div>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/contact">contact</NavLink>
//         <NavLink to="/login">Login</NavLink>
//         <NavLink to="/about">about</NavLink>
//         <NavLink to="/registration">signup</NavLink>

//     </div>
//   )
// }

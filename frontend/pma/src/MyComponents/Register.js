import React, { useState } from 'react'
import "./Register.css"
import {

    NavLink, useHistory
  } from "react-router-dom";
export const Register = () => {
    const history = useHistory()

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
        // console.log(user)
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json()

        if (data.status === 422 || !data) {
            window.alert("INVALID Registration");
            console.log("INVALID Registration")
        } else {
            window.alert("Registration Successfull")
            console.log("Registration Successfull")
            history.push("/home")


        }
    }


    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='Rform' method='POST'>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" name='name' id='name' placeholder='Your Name' value={user.name} onChange={handleInputs} />
               
                <label for="username">Email</label>
             <input type="text" name='email' id='email' placeholder='Your Email' value={user.email} onChange={handleInputs} />
                
                <label for="username">Phone</label>
                <input type="number" name='phone' id='phone' placeholder='Your Phone' value={user.phone} onChange={handleInputs} />                

                <label for="username">Work</label>
                <input type="text" name='work' id='work' placeholder='Your Profession' value={user.work} onChange={handleInputs} />
                
                <label for="password">Password</label>
                <input type="password" name='password' id='password' placeholder='Your Password' value={user.password} onChange={handleInputs} />

                <label for="password"> Confirm Password</label>
                <input type="password" name='cpassword' id='cpassword' placeholder='Confirm Your Password' value={user.cpassword} onChange={handleInputs} />

                <button type='submit' onClick={PostData}>Register</button>
                <div className="social">
                    <div className='go'>

                        <NavLink to="/login" className="kkkk">Login</NavLink>
                    </div>
                    {/* <div className="go"><i className="fab fa-google"></i>  Google</div> */}
                    {/* <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div> */}
                </div>
            </form>

        </>
    )
}

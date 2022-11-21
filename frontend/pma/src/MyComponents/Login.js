import React, { useState } from 'react'
import "./Login.css"
import {

    NavLink, useHistory
  } from "react-router-dom";

export const Login = () => {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Inavlid Credentials");
        } else {
            window.alert("Login Successfull");
            history.push("/home")

        }
    }


    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form method='POST'>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email"  name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password'  value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={loginUser}>Log In</button>
                <div className="social">
                    <div className='go'>

                <NavLink to="/register" className="kkkk">Register</NavLink>
                    </div>
                    {/* <div className="go"><i className="fab fa-google"></i>  Google</div> */}
                    {/* <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div> */}
                </div>
            </form>
        </>
    )
}

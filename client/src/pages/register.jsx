
import { AuthContext } from '../components/context/authContext/AuthContext';
import { useState, useContext, } from 'react';
import React from 'react'

function Register() {
    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const {isFetching, dispatch}= useContext(AuthContext);

  return (
    <div className=" login">
            <form className="loginForm">
                <input
                    type="text"
                    placeholder="email"
                    className=" loginInput "
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password "
                    className="loginInput"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button className=" loginButton " disabled={isFetching} >Login</button>
            </form>
    
            <div></div>
    
        </div>
      )
}

export default Register
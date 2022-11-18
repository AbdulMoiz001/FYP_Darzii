import React, { useState } from "react";
import { useContext } from "react";
import { login } from "../components/context/authContext/apiCalls";
import { AuthContext } from "../components/context/authContext/AuthContext";
import "./css/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setpasswd] = useState("");
    const [isFetching, dispatch ]= useContext(AuthContext);


    const handleLogin = (e) =>
    {
        e.preventDefault();
        login({email , passwd}, dispatch) ;
    }

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
          onChange={(e) => setpasswd(e.target.value)}
        />
        <button className=" loginButton " onClick={handleLogin} disabled= {isFetching} >Login</button>
      </form>
    </div>
  );
}



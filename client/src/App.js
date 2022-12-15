import React from "react";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <Router>
      <Navbar />
      <Routes>
{/* 
        <Route exact path="/" element={<Login />} /> */}

      </Routes>
    </Router>
  );
};


export default App;

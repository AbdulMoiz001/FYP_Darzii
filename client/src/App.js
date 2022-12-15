import React from "react";
import Login from "./pages/login";
import Register from "./pages/register"
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

        {/* <Route path="/logIn" element={<Login />} /> */}
        <Route path="/login" element={<Register />} />

      </Routes>
    </Router>
  );
};


export default App;

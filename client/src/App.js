import React from "react";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Login />} />

      </Routes>
    </Router>
  );
};


export default App;

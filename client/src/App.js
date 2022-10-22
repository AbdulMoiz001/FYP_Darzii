import React from "react";
import Navbar from "./components/javaScript/navBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App= () =>
{
    return(
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact  />
            </Routes>
        
        </Router>
        </>
    )
}

export default App;
import React from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import Store from './components/Screens/Store/Store';
import Gateway from './components/Screens/Signup/Gateway';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='Store' element={<Store/>}/>
            <Route path='Try' element={<Gateway/>}/>
          </Routes>
    </div>
  );
}

export default App;

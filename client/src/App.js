import React from "react";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
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

// const App = () => {
//   return (
//     <>
//       <h1>Hello there</h1>
//     </>
//   );
// };

export default App;

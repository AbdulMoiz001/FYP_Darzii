import React from "react";
import App from "./App";
import { AuthContextProvider } from "./components/context/authContext/AuthContext";
import { createRoot } from "react-dom/client";

<React.StrictMode>
  <AuthContextProvider></AuthContextProvider>
</React.StrictMode>;
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App tab="home" />
    </AuthContextProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//     // <React.StrictMode>
//     //   <AuthContextProvider>

//     //   </AuthContextProvider>
//     // </React.StrictMode>,
//         <App />,
//     document.getElementById("root")
//   );

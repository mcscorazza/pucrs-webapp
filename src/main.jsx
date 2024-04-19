import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Application from "./routes/Application";
import Products from "./pages/Products";
import Codes from "./pages/Codes";
import Units from "./pages/Units";
import Types from "./pages/Types";

import Erro404 from "./pages/Erro404.jsx";

// https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <Application />,
    errorElement: <Erro404 />,
    children: [
      { path: "products", element: <Products />},  
      { path: "codes", element: <Codes />},
      { path: "units", element: <Units />},
      { path: "types", element: <Types />},
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

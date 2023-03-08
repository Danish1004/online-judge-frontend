import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
// import Editor from "./pages/editor/Editor";
// import CodeWindow from "./components/codewindow/CodeWindow";
import CustomInput from "./components/custominput/CustomInput";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/editor",
    element: <CustomInput />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

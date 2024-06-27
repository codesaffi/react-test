import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/react-test/",
    element: <App />,
    children: [
      {
        path: "/react-test/",
        element: <About />,
      },
      {
        path: "/react-test/login",
        element: <Login />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Router
import { createBrowserRouter, RouterProvider, Router, Navigate } from "react-router-dom";
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import Product from './routes/Product.jsx';
import Info from './routes/Info.jsx';
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />, 
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "product/:id/info",
        element: <Info />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

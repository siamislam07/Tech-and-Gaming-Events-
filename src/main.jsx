import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root'
import Login from './Components/Login';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import CreateAccount from './Components/CreateAccount';

import Details from './Details/Details';
import Details2 from './Details/Details2';
import Details3 from './Details/Details3';
import Details4 from './Details/Details4';
import Details5 from './Details/Details5';
import Details6 from './Details/Details6';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        // loader: () => fetch('/home-data.json'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/CreateAccount',
        element: <CreateAccount></CreateAccount>
      },
      {
        path: '/details/1',
        element: <Details></Details>,
        loader: () => fetch('/home-data.json')

      },
      
      {
        path: '/details/2',
        element: <Details2></Details2>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/3',
        element: <Details3></Details3>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/4',
        element: <Details4></Details4>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/5',
        element: <Details5></Details5>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/6',
        element: <Details6></Details6>,
        loader: () => fetch('/home-data.json')

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)

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

import Details from './Components/details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: () =>fetch('/home-data.json'),
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
        path: '/details/:id',
        element: <Details></Details>,
        loader: ()=>fetch('/home-data.json')
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)

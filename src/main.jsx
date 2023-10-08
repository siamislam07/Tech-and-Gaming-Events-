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
import AuthProvider from './providers/AuthProvider';
import Tech from './Components/Tech';
import PrivateRoute from './Components/PrivateRoute';
import DashBoard from './Components/DashBoard';


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
        path: '/tech',
        element:<PrivateRoute><Tech></Tech></PrivateRoute>
      },
      {
        path:'/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>

      },
      {
        path: '/details/1',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      },

      {
        path: '/details/2',
        element: <PrivateRoute><Details2></Details2></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/3',
        element: <PrivateRoute><Details3></Details3></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/4',
        element: <PrivateRoute><Details4></Details4></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/5',
        element: <PrivateRoute><Details5></Details5></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      },
      {
        path: '/details/6',
        element: <PrivateRoute><Details6></Details6></PrivateRoute>,
        loader: () => fetch('/home-data.json')

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)

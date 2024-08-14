import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import FirebaseAuthProvider from './FirebaseProvder/FirebaseAuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<FirebaseAuthProvider>
<RouterProvider router={router} />
</FirebaseAuthProvider>
  </StrictMode>,
)

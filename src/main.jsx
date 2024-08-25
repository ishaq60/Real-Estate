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
import ErrorPages from './Pages/ErrorPages.jsx';
import CardDetails from './Pages/Cards/CardDetails.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';
import UpdateProfile from './Pages/Personal/UpdateProfile.jsx';
import UserProfile from './Pages/Personal/UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPages></ErrorPages>,
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
      },
      {
          path:"/userUpdate",
          element: <PrivateRoute> <UpdateProfile/> </PrivateRoute>
      },
      {
         path: "/userprofile",
         element: <PrivateRoute> <UserProfile/> </PrivateRoute>
      },
      {
        path:'/card/:id',
        element:<PrivateRoute><CardDetails/></PrivateRoute>,
        loader:()=>fetch('data.json')
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

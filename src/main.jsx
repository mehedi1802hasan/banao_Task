import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
     </React.StrictMode>,
)

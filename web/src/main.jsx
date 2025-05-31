import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './pages/Product/index.jsx'
import Order from './pages/Order'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/order",
    element: <Order/>,
  },

]);


const root = document.getElementById("root");

createRoot(root).render(
  <RouterProvider router={router} />
)

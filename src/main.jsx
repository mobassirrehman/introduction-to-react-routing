import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Laptops from './components/Laptops.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      {path: "laptops", Component: Laptops}
    ],
  },
  {
    path: "/about",
    element: <div>This is About React Router</div>
  },
  {
    path: "/blog",
  element: <div>The blog is here</div>
  },
  {
    path: "app",
    Component: App,
    // element: <App></App>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)

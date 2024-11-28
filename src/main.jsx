import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import RaptorsMeteorFeast from './components/RaptorsMeteorFeast.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/raptormeteorfeast",
    element: <RaptorsMeteorFeast />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

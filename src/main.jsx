import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import RaptorsMeteorFeast from './components/AllProject/RaptorsMeteorFeast.jsx'
import GuessMyNumber from './components/AllProject/GuessMyNumber.jsx'
import PigGameDice from './components/AllProject/PigGameDice.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/raptormeteorfeast",
    element: <RaptorsMeteorFeast />,
  },
  {
    path: "/guessmynumber",
    element: <GuessMyNumber />,
  },
  {
    path: "/piggamedice",
    element: <PigGameDice />,
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

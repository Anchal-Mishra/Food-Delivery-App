import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Body from './components/Body.jsx'
import SearchBar from './components/SearchBar.jsx'
import Offers from './components/Offers.jsx'
import SignIn from "./components/SignIn.jsx"
import Cart from "./components/Cart.jsx"
import Error from "./components/Error.jsx"
import RestaurantDetails from './components/RestaurantDetails.jsx'
import DishesCard from './components/DishesCard.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"search",
        element:<SearchBar/>
      },
      {
        path:"/offers",
        element:<Offers/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantDetails/>
      },
    ],
    errorElement:<Error/>
  }
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

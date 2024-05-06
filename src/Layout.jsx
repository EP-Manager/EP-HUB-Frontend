import HomePage from "./Pages/HomePage"
import Shop from "./Pages/Shop"
import MyOrders from "./Pages/MyOrders"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import LandingPage from "./Pages/LandingPage"
import SellingPage from "./Pages/SellingPage"

import { Routes, Route } from "react-router-dom"



const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/shop" element={<Shop/>}/>\
      <Route path="/my-orders" element={<MyOrders/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/buy" element={<LandingPage/>}/>
      <Route path="/sell" element={<SellingPage/>}/>
    </Routes>
  )
}

export default Layout
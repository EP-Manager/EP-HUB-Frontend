import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Roles from "../Components/Roles"
import VisionMission from "../Components/VisionMission"

import '../Styles/HomePage.css'

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <AboutUs/>
      <VisionMission/>
      <Roles/>
      <Footer/>
    </div>
  )
}

export default HomePage
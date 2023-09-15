import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {

  //ÁREA DECLARATIVA

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {

  //ÁREA DECLARATIVA

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
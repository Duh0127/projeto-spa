import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  //ÁREA DECLARATIVA

  return (
    <>
      <Cabecalho/>
      <Conteudo logoDoApp={reactLogo} altLogo="Logo React"/>
      <Footer />
    </>
  )
}
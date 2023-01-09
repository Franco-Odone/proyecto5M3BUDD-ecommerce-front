import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { ListadoDeProductos } from "../components/ListadoDeProductos/ListadoDeProductos";
import { RegistroDeUsuario } from "../components/RegistroDeUsuario/RegistroDeUsuario";
import { InicioDeSesion } from "../components/InicioDeSesion/InicioDeSesion";
import { MiPerfil } from "../components/MiPerfil/MiPerfil";
import { ProductoIndividual } from "../components/ProductoIndividual/ProductoIndividual";
import { Checkout } from "../components/Checkout/Checkout";
import { Footer } from "../components/Footer/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Checkout es la ventana para pagar */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/registro-de-usuario" element={<RegistroDeUsuario />} />
        <Route path="/inicio-de-sesion" element={<InicioDeSesion />} />
        <Route path="/mi-perfil" element={<MiPerfil />} />
        <Route path="/producto-individual" element={<ProductoIndividual />} />
        <Route path="/listado-de-productos" element={<ListadoDeProductos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

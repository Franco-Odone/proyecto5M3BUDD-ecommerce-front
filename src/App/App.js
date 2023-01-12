import { Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import "./App.css";

import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { ListadoDeProductos } from "../components/ListadoDeProductos/ListadoDeProductos";
import { RegistroDeUsuario } from "../components/RegistroDeUsuario/RegistroDeUsuario";
import { InicioDeSesion } from "../components/InicioDeSesion/InicioDeSesion";
import { MiPerfil } from "../components/MiPerfil/MiPerfil";
import { Checkout } from "../components/Checkout/Checkout";
import { Default } from "../components/PageNotFound/Default";
import { Footer } from "../components/Footer/Footer";
import { Cart } from "../components/Cart/Cart";
import { Details } from "../components/Details/Details";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/listado-de-productos"
            element={<ListadoDeProductos />}
          />
          <Route path="/producto-individual-details" element={<Details />} />
          <Route path="/registro-de-usuario" element={<RegistroDeUsuario />} />
          <Route path="/inicio-de-sesion" element={<InicioDeSesion />} />
          <Route path="/mi-perfil" element={<MiPerfil />} />
          <Route path="/cart" element={<Cart />} />
          {/* Checkout es la ventana para pagar */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { ListadoDeProductos } from "../components/ListadoDeProductos/ListadoDeProductos";
import { Details } from "../components/Details/Details";
import { CartCheckout } from "../components/Cart/CartCheckout";
import { RegistroDeUsuario } from "../components/RegistroDeUsuario/RegistroDeUsuario";
import { InicioDeSesion } from "../components/InicioDeSesion/InicioDeSesion";
import { MiPerfil } from "../components/MiPerfil/MiPerfil";
import { Footer } from "../components/Footer/Footer";
import { Default } from "../components/PageNotFound/Default";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
          components: "buttons",
          currency: "USD",
        }}
      >
        <div className="App">
          <CssBaseline />
          <Header />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/listado-de-productos"
                element={<ListadoDeProductos />}
              />
              <Route
                path="/producto-individual-details"
                element={<Details />}
              />
              <Route path="/cart-checkout" element={<CartCheckout />} />
              <Route
                path="/registro-de-usuario"
                element={<RegistroDeUsuario />}
              />
              <Route path="/inicio-de-sesion" element={<InicioDeSesion />} />
              <Route path="/mi-perfil" element={<MiPerfil />} />
              <Route path="*" element={<Default />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </PayPalScriptProvider>
      <ToastContainer />
    </>
  );
}

export default App;

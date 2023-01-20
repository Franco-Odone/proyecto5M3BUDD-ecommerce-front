import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Provider para manejar la data de los productos
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// // Se cambia el nombre ya que el default export es en realidad un reducer
import authReducer, { logoutUser, loadUser } from "./slices/authSlice";
import productsReducer, { productsFetch } from "./slices/productsSlice";
import { productsApi } from "./slices/productsApi";

import { ProductContextProvider } from "./components/context/ProductContext";

import App from "./App/App";
import "./index.css";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(loadUser(null));
store.dispatch(logoutUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </Provider>
  </React.StrictMode>
);

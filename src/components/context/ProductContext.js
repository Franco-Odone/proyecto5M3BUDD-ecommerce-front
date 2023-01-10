import { createContext, useState } from "react";
import { detailProduct, storeProducts } from "../../data";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [copiaDataProductos, setCopiaDataProductos] = useState([
    ...storeProducts,
  ]);

  const handleDetails = () => {
    console.log("Details");
  };
  const addToCart = () => {
    console.log("Cart");
  };
  return (
    <ProductContext.Provider
      value={{ detailProduct, copiaDataProductos, addToCart, handleDetails }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };

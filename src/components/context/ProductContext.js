import { createContext } from "react";
import { detailProduct, storeProducts } from "../../data";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const handleDetails = () => {
    console.log("Details");
  };
  const addToCart = () => {
    console.log("Cart");
  };
  return (
    <ProductContext.Provider
      value={{ detailProduct, storeProducts, addToCart, handleDetails }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };

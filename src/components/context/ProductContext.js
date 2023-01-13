import { createContext, useState } from "react";

import { detailProduct, storeProducts } from "../../data";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  // Hago una copia para mantener los valores originales sin modificar
  // storeProducts es para usarlo en listadoDePoductos ya que necesito todos los productos
  const [copiaStoreProducts, setCopiaStoreProducts] = useState([
    ...storeProducts,
  ]);

  // detailProduct es para usarlo en Details ya que necesito un solo producto
  const [copiaDetailProduct, setCopiaDetailProducts] = useState({
    ...detailProduct,
  });

  // Estados para manejar el carro de compras
  const [cartUpdate, setCartUpdate] = useState([]);

  const [cartSubTotal, setCartSubTotal] = useState(0);

  const [cartTotal, setCartTotal] = useState(0);

  const [count, setCount] = useState(1);

  // Funciones

  const getItem = (id) => {
    let product = storeProducts.find((item) => item.id === id);
    return product;
  };

  const handleDetails = (id) => {
    let product = getItem(id);
    setCopiaDetailProducts(product);
  };

  const addToCart = (id) => {
    // En este caso voy a user el index y no el id del producto para que se añada extactamente el producto al que se la hace click
    // en el caso de que cambie el id del producto
    let index = copiaStoreProducts.indexOf(getItem(id));
    // Referencia al producto, no copia
    let product = copiaStoreProducts[index];
    let price;

    product.inCart = true;
    product.count = 1;
    price = product.price;
    product.total = price;

    setCopiaStoreProducts(copiaStoreProducts);
    setCartUpdate((cartData) => [...cartData, product]);
  };

  const incrementInCart = (id) => {
    setCount();
    console.log("increment");
  };

  const decrementInCart = (id) => {
    setCount();
    console.log("decrement");
  };

  const removeItemInCart = (id) => {
    console.log("remove Item");
  };

  const clearCart = () => {
    console.log("Clear Cart");
  };

  return (
    <ProductContext.Provider
      value={{
        count,
        cartUpdate,
        cartSubTotal,
        cartTotal,
        copiaDetailProduct,
        copiaStoreProducts,
        handleDetails,
        addToCart,
        incrementInCart,
        decrementInCart,
        removeItemInCart,
        clearCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };

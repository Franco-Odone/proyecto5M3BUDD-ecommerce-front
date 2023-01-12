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

  // Estado para manejar el carro de compras
  const [cartUpdate, setCartUpdate] = useState([]);

  const getItem = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    return product;
  };

  const handleDetails = (id) => {
    const product = getItem(id);
    setCopiaDetailProducts(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...storeProducts];
    let price;
    // En este caso voy a user el index y no el id del producto para que se añada extactamente el producto al que se la hace click
    // en el caso de que cambie en id del producto
    const index = tempProducts.indexOf(getItem(id));
    // Referencia al producto, no copia
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    price = product.price;
    product.total = price;

    setCopiaStoreProducts(tempProducts);
    setCartUpdate((cartData) => [...cartData, product]);
  };

  return (
    <ProductContext.Provider
      value={{
        cartUpdate,
        copiaDetailProduct,
        copiaStoreProducts,
        addToCart,
        handleDetails,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };

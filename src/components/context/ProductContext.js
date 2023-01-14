import { createContext, useEffect, useState } from "react";

import { detailProduct, storeProducts } from "../../data";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  // Hago una copia estricta para mantener los valores originales de storeProducts sin modificar
  // storeProducts es para usarlo en listadoDePoductos ya que necesito todos los productos
  const [copiaStoreProducts, setCopiaStoreProducts] = useState(
    JSON.parse(JSON.stringify(storeProducts))
  );

  // detailProduct es para usarlo en Details ya que necesito un solo producto
  const [copiaDetailProduct, setCopiaDetailProducts] = useState({
    ...detailProduct,
  });

  // Estados para manejar el carro de compras
  const [cartUpdate, setCartUpdate] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  // Funciones
  const getItem = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let product = tempProducts.find((item) => item.id === id);
    return product;
  };

  // Función que modifica el objeto detailProduct
  const handleDetails = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index];
    setCopiaDetailProducts(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index];

    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    setCopiaStoreProducts(tempProducts);
    setCartUpdate((cartData) => [...cartData, product]);
  };

  const incrementInCart = (id) => {
    let tempCart = [...cartUpdate];
    let selectedProduct = tempCart.find((item) => item.id === id);
    let index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCartUpdate(tempCart);
  };

  const decrementInCart = (id) => {
    let tempCart = [...cartUpdate];
    let selectedProduct = tempCart.find((item) => item.id === id);
    let index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];

    if (product.count > 1) {
      product.count = product.count - 1;
      product.total = product.count * product.price;
      setCartUpdate(tempCart);
    }
  };

  const removeItemInCart = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    let tempCart = [...cartUpdate];
    tempCart = tempCart.filter((item) => item.id !== id);

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCopiaStoreProducts(tempProducts);
    setCartUpdate(tempCart);
  };

  // useEffect
  useEffect(() => {
    // Función para calcular el valor total del Cart con todos los productos y sus cantidades respectivas
    const addCartTotal = () => {
      let total = 0;
      cartUpdate.map((cartItem) => (total += cartItem.total));
      setCartTotal(total);
    };

    addCartTotal();
  }, [cartUpdate]);

  const clearCart = () => {
    // copia estricta de storeProducts para volver todos los valores a su estado original
    setCopiaStoreProducts(JSON.parse(JSON.stringify(storeProducts)));
    setCartUpdate([]);
  };

  return (
    <ProductContext.Provider
      value={{
        cartUpdate,
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

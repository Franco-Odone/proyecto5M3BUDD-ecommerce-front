import { createContext, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { detailProduct } from "../../data";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const { items: data, status } = useSelector((state) => state.products);

  // State para actualizar perfil de usuario
  const [updateUserProfile, setUpdateUserProfile] = useState([]);

  // Hago una copia estricta para para poder modificar una propiedad del state proveniente del redux slice
  // desde donde se hace el fetch de los productos
  const [copiaStoreProducts, setCopiaStoreProducts] = useState(
    JSON.parse(JSON.stringify(data))
  );

  useEffect(() => {
    setCopiaStoreProducts(JSON.parse(JSON.stringify(data)));
  }, [data, status]);

  // detailProduct es un objeto por defecto para usarlo en Details y hacer una validación
  const [copiaDetailProduct, setCopiaDetailProduct] = useState({
    ...detailProduct,
  });

  // Estados para manejar el carro de compras
  const [cartUpdate, setCartUpdate] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  // Funciones
  const getItem = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let product = tempProducts.find((item) => item._id === id);
    return product;
  };

  // Función que modifica el objeto detailProduct
  const handleDetails = (id) => {
    let tempProducts = [...copiaStoreProducts];
    let index = tempProducts.indexOf(getItem(id));
    let product = tempProducts[index];
    setCopiaDetailProduct(product);
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
    let selectedProduct = tempCart.find((item) => item._id === id);
    let index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCartUpdate(tempCart);
  };

  const decrementInCart = (id) => {
    let tempCart = [...cartUpdate];
    let selectedProduct = tempCart.find((item) => item._id === id);
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
    tempCart = tempCart.filter((item) => item._id !== id);

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCopiaStoreProducts(tempProducts);
    setCartUpdate(tempCart);
  };

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
    setCopiaStoreProducts(JSON.parse(JSON.stringify(data)));
    setCartUpdate([]);
  };

  return (
    <ProductContext.Provider
      value={{
        status,
        cartUpdate,
        cartTotal,
        copiaDetailProduct,
        copiaStoreProducts,
        updateUserProfile,
        setUpdateUserProfile,
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

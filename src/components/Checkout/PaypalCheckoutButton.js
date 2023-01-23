import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { ProductContext } from "../context/ProductContext";

const PaypalCheckoutButton = (props) => {
  // const [paidFor, setPaidFor] = useState(false);
  // const [error, setError] = useState(null);
  let { setUpdateUserProfile } = useContext(ProductContext);

  const [total, setTotal] = useState(props.cartTotal);

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(props.cartTotal);
  }, [props.cartTotal]);

  // const handleOnClick = (data, actions) => {
  //   // Validate on button click, client or server side
  //   const hasAlreadyBoughtProduct = false;
  //   if (hasAlreadyBoughtProduct) {
  //     // setError("El producto ya ha sido comprado");
  //     return actions.reject();
  //   } else {
  //     return actions.resolve();
  //   }
  // };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApproveOrder = async (data, actions) => {
    await actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(
        `Transacción completada a nombre de: ${name} (titular cuenta PayPal).`
      );
    });

    handleApprove(data.orderID);
    alert("Gracias por su compra!");
  };

  const handleApprove = (orderID) => {
    // Call backend function to fulfill order

    // If response is success
    // setPaidFor(true);
    // console.log(paidFor);
    props.clearCart();
    navigate("/mi-perfil");

    // Refresh user´s account or subscription status
    setUpdateUserProfile(props.cartUpdate);

    alert(`Orden n°: "${orderID}", aprovada con éxito.`);
    // if the response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support for assistance")
  };

  const onCancelOrder = () => {
    // Display cancel message, modal or redirect user to cancel page or back to cart
    // setPaidFor(false);
    navigate("/cart-checkout");
  };

  const onErrorOrder = (err) => {
    // setError(err);
    console.log("PayPal Checkout onError", err);
  };

  // if (paidFor) {
  //   // Display success message, modal o redirect user to success page
  //   alert("Gracias por su compra!");
  // }

  // if (error) {
  //   // Display error message, modal or redirect to error page
  //   alert(error);
  // }

  return (
    <>
      <PayPalButtons
        style={{
          color: "silver",
          layout: "horizontal",
          height: 48,
          tagline: false,
          shape: "pill",
        }}
        disabled={false}
        forceReRender={[total]}
        // onClick={handleOnClick}
        createOrder={onCreateOrder}
        onApprove={onApproveOrder}
        onCancel={onCancelOrder}
        onError={onErrorOrder}
      />
    </>
  );
};

export { PaypalCheckoutButton };

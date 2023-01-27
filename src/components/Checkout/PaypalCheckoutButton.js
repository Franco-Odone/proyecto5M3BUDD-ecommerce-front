import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { ProductContext } from "../context/ProductContext";

const PaypalCheckoutButton = (props) => {
  let { setUpdateUserProfile } = useContext(ProductContext);
  const [total, setTotal] = useState(props.cartTotal);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(props.cartTotal);
  }, [props.cartTotal]);

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
    const ownerOrder = await actions.order.capture().then(async (details) => {
      const name = details.payer.name.given_name;
      return name;
    });

    await Swal.fire(
      `Transacción completada a nombre de: ${ownerOrder} (titular cuenta PayPal).`
    );

    props.clearCart();
    navigate("/mi-perfil");

    // Refresh user´s account or subscription status
    setUpdateUserProfile(props.cartUpdate);
    await Swal.fire(`Orden: "${data.orderID}", aprobada con éxito.`);

    Swal.fire("Gracias por su compra!");
  };

  const onCancelOrder = () => {
    // Display cancel message, modal or redirect user to cancel page or back to cart
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Compra cancelada... :(",
    });
    navigate("/cart-checkout");
  };

  const onErrorOrder = (err) => {
    console.log("PayPal Checkout onError", err);
    Swal.fire({
      icon: "error",
      title: "PayPal Checkout onError",
      text: err,
    });
  };

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
        createOrder={onCreateOrder}
        onApprove={onApproveOrder}
        onCancel={onCancelOrder}
        onError={onErrorOrder}
      />
    </>
  );
};

export { PaypalCheckoutButton };

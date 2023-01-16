import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Container,
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
  Button,
} from "@mui/material";

import { ProductContext } from "../context/ProductContext";
import { EmptyCart } from "./EmpyCart";
import { CartTable } from "./CartTable";
import { CartTotalTable } from "./CartTotalTable";
import { PaypalCheckoutButton } from "../Checkout/PaypalCheckoutButton";

import "./cart.css";

const CartCheckout = () => {
  let {
    cartUpdate,
    cartTotal,
    incrementInCart,
    decrementInCart,
    removeItemInCart,
    clearCart,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  if (cartUpdate.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <Box
        sx={{
          height: "fit-content",
          pt: 4,
          pb: 4,
        }}
      >
        <Container
          sx={{
            textAlign: "center",
          }}
          maxWidth="md"
        >
          <ThemeProvider theme={theme}>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{
                fontWeight: "500",
                color: "#ffc622",
              }}
              gutterBottom
            >
              Carro de compras
            </Typography>
          </ThemeProvider>
          <CartTable
            cartUpdate={cartUpdate}
            incrementInCart={incrementInCart}
            decrementInCart={decrementInCart}
            removeItemInCart={removeItemInCart}
          />
          <CartTotalTable cartTotal={cartTotal} />
          <Button
            variant="contained"
            color="warning"
            sx={{
              mt: "20px",
              mb: "20px",
            }}
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Vaciar carro de compras
          </Button>
          <Box sx={{ width: { md: "50%" }, m: "auto" }}>
            <PaypalCheckoutButton
              cartUpdate={cartUpdate}
              cartTotal={cartTotal}
            />
          </Box>
        </Container>
      </Box>
    );
  }
};

export { CartCheckout };

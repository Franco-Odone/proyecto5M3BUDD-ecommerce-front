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

import "./cart.css";

const Cart = () => {
  let {
    cartUpdate,
    cartSubTotal,
    cartTotal,
    incrementInCart,
    decrementInCart,
    count,
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
                pb: "20px",
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
            count={count}
            removeItemInCart={removeItemInCart}
          />
          <CartTotalTable cartSubTotal={cartSubTotal} cartTotal={cartTotal} />
          <Button
            variant="contained"
            color="warning"
            sx={{
              mt: "20px",
            }}
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Vaciar carro de compras
          </Button>
        </Container>
      </Box>
    );
  }
};

export { Cart };

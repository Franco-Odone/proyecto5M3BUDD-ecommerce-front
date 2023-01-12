import { useContext } from "react";

import {
  Grid,
  Typography,
  Box,
  Container,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { ProductContext } from "../context/ProductContext";
import { ProductoIndividual } from "../ProductoIndividual/ProductoIndividual";

const ListadoDeProductos = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  let { copiaStoreProducts, handleDetails, addToCart } =
    useContext(ProductContext);

  return (
    <Box
      sx={{
        bgcolor: "#01579b",
        pt: 0,
        pb: 6,
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          sx={{
            fontWeight: "500",
            color: "#ffc622",
            pt: "40px",
            pb: "40px",
          }}
        >
          Productos
        </Typography>
        <Typography
          component="h3"
          variant="h6"
          align="center"
          sx={{
            color: "#ffc622",
          }}
        >
          *Para ver detalles del producto hacer click en la imágen*
        </Typography>
      </ThemeProvider>
      <Container sx={{ py: 0 }} maxWidth="md">
        <Grid container spacing={4}>
          {copiaStoreProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductoIndividual
                addToCart={addToCart}
                handleDetails={handleDetails}
                copiaStoreProducts={product}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { ListadoDeProductos };

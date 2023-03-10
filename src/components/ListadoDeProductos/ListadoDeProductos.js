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

  let { copiaStoreProducts, handleDetails, addToCart, status } =
    useContext(ProductContext);

  return (
    <Box
      sx={{
        pt: 0,
        pb: 6,
      }}
    >
      {status === "success" ? (
        <>
          <ThemeProvider theme={theme}>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{
                fontWeight: "500",
                color: "#ffc622",
                pt: "40px",
                pb: "20px",
              }}
            >
              Productos
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              sx={{
                color: "#ffffff",
                fontWeight: "500",
                backgroundColor: "#0288d1dd",
                padding: "15px 15px",
                borderRadius: "5px",
                margin: "auto",
                width: { xs: "90%", md: "fit-content" },
              }}
            >
              *Para ver detalles del producto hacer click en la imágen*
            </Typography>
          </ThemeProvider>
          <Container sx={{ py: 0, mt: "15px" }} maxWidth="md">
            <Grid container spacing={4}>
              {copiaStoreProducts.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <ProductoIndividual
                    addToCart={addToCart}
                    handleDetails={handleDetails}
                    copiaStoreProducts={product}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : status === "pending" ? (
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
            Cargando...
          </Typography>
        </ThemeProvider>
      ) : (
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
            Ocurrió un error inesperado...
          </Typography>
        </ThemeProvider>
      )}
    </Box>
  );
};

export { ListadoDeProductos };

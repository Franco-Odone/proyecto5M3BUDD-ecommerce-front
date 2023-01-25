import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Box,
  Container,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import { ProductContext } from "../context/ProductContext";

const MiPerfil = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth._id && navigate("/cart-checkout");
  }, [auth._id, navigate]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  let { status, updateUserProfile } = useContext(ProductContext);

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
                pb: "40px",
              }}
            >
              Hola, {auth.username}!
            </Typography>
            <Typography
              component="h3"
              variant="h4"
              align="center"
              sx={{
                color: "#ffc622",
                fontWeight: "500",
                mb: "15px",
              }}
            >
              {updateUserProfile.length === 0
                ? "Aún no has comprado nada :("
                : "Productos comprados:"}
            </Typography>
          </ThemeProvider>
          <Container sx={{ py: 0 }} maxWidth="md">
            <Grid container spacing={4}>
              {updateUserProfile.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#ffc622",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                      }}
                      image={require("../../img/" + product.img + ".png")}
                      alt="product"
                    />
                    <CardContent sx={{ flexGrow: 1, pb: "0" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        textAlign="center"
                        sx={{ fontWeight: "600" }}
                      >
                        {product.title}
                      </Typography>
                    </CardContent>
                  </Card>
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

export { MiPerfil };

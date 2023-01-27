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
  let { status, updateUserProfile } = useContext(ProductContext);
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  useEffect(() => {
    !auth._id && navigate("/");
  }, [auth._id, navigate]);

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
                margin: "auto",
                width: "fit-content",
                color: "#ffc622",
                pt: "40px",
                pb: "20px",
              }}
            >
              ¡Hola, {auth.username}!
            </Typography>
            <Card
              sx={{
                height: "100%",
                width: "90%",
                margin: "auto",
                mb: "25px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#0288d1dd",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  pb: "0",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    textAlign="center"
                    sx={{
                      color: "#ffffff",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Usuario:
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    textAlign="center"
                    sx={{ fontWeight: "600", color: "#ffc622" }}
                  >
                    {auth.username}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    textAlign="center"
                    sx={{
                      fontWeight: "600",
                      textDecoration: "underline",
                      color: "#ffffff",
                    }}
                  >
                    Contacto:
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    textAlign="center"
                    sx={{ fontWeight: "600", color: "#ffc622" }}
                  >
                    {auth.email}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Typography
              component="h3"
              variant="h4"
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
              {updateUserProfile.length === 0
                ? "Cuándo hagas una compra tus productos van a aparecer acá"
                : "Productos comprados:"}
            </Typography>
          </ThemeProvider>
          <Container sx={{ py: 0, mt: "25px" }} maxWidth="md">
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

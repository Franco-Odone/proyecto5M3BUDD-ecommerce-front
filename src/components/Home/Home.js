import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Typography,
  Box,
  Stack,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import "./home.css";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const navigate = useNavigate();

  return (
    <Box
      className="homeBox"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#0288d1dd",
          padding: "5px 15px 15px 15px",
          borderRadius: "5px",
          margin: "auto",
          width: "90%",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            sx={{
              fontWeight: "500",
              color: "#ffc622",
              pb: "20px",
            }}
            gutterBottom
          >
            Ecommerce
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              color: "#ffffff",
            }}
          >
            Tenemos el mejor precio y servicio para el smartphone que buscas.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              color: "#ffffff",
            }}
          >
            Entra y lleva el tuyo!
          </Typography>
        </ThemeProvider>
        <Stack
          sx={{ pt: 4 }}
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/registro-de-usuario");
            }}
          >
            Registrarse
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/listado-de-productos");
            }}
          >
            Productos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export { Home };

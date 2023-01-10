import "./home.css";
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
import { useNavigate } from "react-router-dom";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#01579b",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
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
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
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

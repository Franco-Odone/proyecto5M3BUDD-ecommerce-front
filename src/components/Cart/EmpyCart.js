import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material";

const EmptyCart = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box
      sx={{
        height: "100vh",
        pt: 6,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
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
          <Typography
            component="h2"
            variant="h4"
            align="center"
            sx={{
              color: "#ffffff",
              fontWeight: "500",
              backgroundColor: "#0288d1dd",
              padding: "15px 15px",
              borderRadius: "5px",
              margin: "auto",
              width: "fit-content",
            }}
          >
            {"No hay productos en el carro aún..."}
          </Typography>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export { EmptyCart };

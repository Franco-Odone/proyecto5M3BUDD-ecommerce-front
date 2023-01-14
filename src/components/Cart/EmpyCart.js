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
          >
            {"El carro de compras está vacío :("}
          </Typography>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export { EmptyCart };

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

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <main>
      <Box
        sx={{
          bgcolor: "#01579b",
          pt: 8,
          pb: 6,
          height: "100vh",
        }}
      >
        <Container maxWidth="sm">
          <ThemeProvider theme={theme}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ecommerce
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              textAlign={"center"}
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </ThemeProvider>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="contained">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export { Home };

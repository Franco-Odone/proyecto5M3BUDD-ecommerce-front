import { useContext } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ProductContext } from "../context/ProductContext";

const Details = () => {
  let { copiaDetailProduct, addToCart } = useContext(ProductContext);
  const { id, company, img, info, price, title, inCart } = copiaDetailProduct;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box
      sx={{
        bgcolor: "#01579b",
        pt: 6,
        pb: 6,
      }}
    >
      <Container sx={{ py: 0 }} maxWidth="xs">
        <Grid container>
          <Grid item>
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
                image={require("../../img/" + img + ".png")}
                alt="product"
              />
              <CardContent sx={{ flexGrow: 1, pb: "0" }}>
                <ThemeProvider theme={theme}>
                  <Typography
                    gutterBottom
                    // style
                    variant="h4"
                    component="h2"
                    textAlign="center"
                    sx={{ fontWeight: "600" }}
                  >
                    {title}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    textAlign="center"
                  >
                    {`Compañía: ${company}`}
                  </Typography>
                  <Typography variant="subtitle2" textAlign="justify">
                    {info}
                  </Typography>
                </ThemeProvider>
              </CardContent>
              <CardActions>
                <Stack
                  sx={{ width: "100%" }}
                  direction="row"
                  spacing={2}
                  justifyContent="space-around"
                >
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#dda400",
                      ":hover": { bgcolor: "#bb8200" },
                    }}
                    disabled={inCart}
                    onClick={() => {
                      console.log("añadido al carro");
                      addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <Box>Producto añadido al carro</Box>
                    ) : (
                      <ShoppingCartOutlinedIcon fontSize="large" />
                    )}
                  </Button>
                  <Typography
                    component="h2"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    sx={{
                      fontWeight: "500",
                      p: "10px 15px 10px 15px",
                      borderRadius: "5px",
                      backgroundColor: "#dda400",
                    }}
                  >
                    {`$${price}`}
                  </Typography>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export { Details };

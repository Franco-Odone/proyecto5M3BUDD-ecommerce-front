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
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
// import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ProductContext } from "../context/ProductContext";

const Details = () => {
  let { detailProduct } = useContext(ProductContext);
  const { company, img, info, price, title, inCart } = detailProduct;

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
      <Container sx={{ py: 0 }} maxWidth="sm">
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
                    variant="h4"
                    component="h2"
                    textAlign="center"
                  >
                    {title}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
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
                    // className="cart-btn"
                    disabled={inCart}
                    onClick={() => {
                      console.log("añadido al carro");
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
                      pr: "20px",
                      pt: "5px",
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

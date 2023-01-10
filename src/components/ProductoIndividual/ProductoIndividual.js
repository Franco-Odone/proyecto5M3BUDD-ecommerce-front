import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductoIndividual = (props) => {
  const [inCart, setInCart] = useState(props.storeProducts.inCart);

  useEffect(() => {
    setInCart(props.storeProducts.inCart);
  }, [props.storeProducts.inCart]);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffc622",
      }}
    >
      <Link
        to="/producto-individual-details"
        onClick={() => {
          console.log("click");
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
          }}
          image={require("../../img/" + props.storeProducts.img + ".png")}
          alt="product"
        />
      </Link>
      <CardContent sx={{ flexGrow: 1, pb: "0" }}>
        <Typography gutterBottom variant="h5" component="h2" textAlign="center">
          {props.storeProducts.title}
        </Typography>
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
            {`$${props.storeProducts.price}`}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

ProductoIndividual.propTypes = {
  storeProducts: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export { ProductoIndividual };

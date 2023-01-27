import { Link } from "react-router-dom";

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

import PropTypes from "prop-types";

const ProductoIndividual = (props) => {
  const { _id, img, price, title, inCart } = props.copiaStoreProducts;

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
          props.handleDetails(_id);
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
            height: { xs: "16em", md: "14em" },
          }}
          image={require("../../img/" + img + ".png")}
          alt="product"
        />
      </Link>
      <CardContent sx={{ flexGrow: 1, pb: "0" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          textAlign="center"
          sx={{ fontWeight: "600" }}
        >
          {title}
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
            sx={{
              backgroundColor: "#dda400",
              ":hover": { bgcolor: "#bb8200" },
            }}
            disabled={inCart}
            onClick={() => {
              props.addToCart(_id);
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
  );
};

ProductoIndividual.propTypes = {
  copiaStoreProducts: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export { ProductoIndividual };

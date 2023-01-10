import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductoIndividual = (props) => {
  // console.log(props.storeProducts);
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffc622",
      }}
    >
      <div
        className="img-container"
        onClick={() => {
          console.log("click");
        }}
      >
        <Link to="/details">
          <CardMedia
            component="img"
            sx={{
              objectFit: "cover",
            }}
            image={require("../../img/" + props.storeProducts.img + ".png")}
            alt="product"
          />
        </Link>
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export { ProductoIndividual };

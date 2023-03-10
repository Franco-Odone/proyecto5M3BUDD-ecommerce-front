import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Función para poder usar puntuación en los números
const getNumberWithDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CartTable = (props) => {
  const tableHeadValues = [
    "Productos",
    "Nombre Producto",
    "Precio",
    "Cantidad",
    "Remover",
  ];
  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <TableContainer component={Paper} sx={{ mb: "25px" }}>
          <Table sx={{ minWidth: "fit-content" }} aria-label="spanning table">
            <TableHead sx={{ backgroundColor: "#459bdf" }}>
              <TableRow>
                {tableHeadValues.map((values) => (
                  <TableCell align="left" key={values}>
                    {values}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#ffc622" }}>
              {props.cartUpdate.map((cartItem) => (
                <TableRow key={cartItem._id}>
                  <TableCell align="left" className="imgContainer">
                    <img
                      className="cartImg"
                      src={require("../../img/" + cartItem.img + ".png")}
                      alt={cartItem.title}
                      loading="lazy"
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "500" }}>
                    {cartItem.title}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "500" }}
                  >{`$${getNumberWithDots(cartItem.price)}`}</TableCell>
                  <TableCell align="left">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                      sx={{
                        bgcolor: "#459bdf",
                      }}
                    >
                      <Button
                        onClick={() => props.decrementInCart(cartItem._id)}
                      >
                        -
                      </Button>
                      <Box
                        sx={{
                          width: "20px",
                          textAlign: "center",
                          m: "auto",
                          fontWeight: "500",
                        }}
                      >
                        {cartItem.count}
                      </Box>
                      <Button
                        onClick={() => props.incrementInCart(cartItem._id)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={() => {
                        props.removeItemInCart(cartItem._id);
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export { CartTable };

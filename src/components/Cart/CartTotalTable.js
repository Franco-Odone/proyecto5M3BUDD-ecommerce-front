import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

// Función para poder usar puntuación en los números
const getNumberWithDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CartTotalTable = (props) => {
  return (
    <TableContainer component={Paper} sx={{ margin: "auto", width: "50%" }}>
      <Table sx={{ minWidth: "fit-content" }} aria-label="spanning table">
        <TableBody sx={{ backgroundColor: "#ffc622" }}>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: "500" }}>
              Total:
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "500" }}>
              {`$${getNumberWithDots(props.cartTotal)}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CartTotalTable };

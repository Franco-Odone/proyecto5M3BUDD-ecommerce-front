import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const CartTotalTable = (props) => {
  return (
    <TableContainer component={Paper} sx={{ margin: "auto", width: "50%" }}>
      <Table sx={{ minWidth: "fit-content" }} aria-label="spanning table">
        <TableBody sx={{ backgroundColor: "#ffc622" }}>
          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: "500" }}>
              Subtotal
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "500" }}>
              {`$${props.cartSubTotal}`}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} sx={{ fontWeight: "500" }}>
              Total
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "500" }}>
              {`$${props.cartTotal}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CartTotalTable };

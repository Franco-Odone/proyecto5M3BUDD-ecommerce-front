import { useContext } from "react";

import { styled, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ProductContext } from "../context/ProductContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartBadge = () => {
  let { cartUpdate } = useContext(ProductContext);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartUpdate.length} color="secondary">
        <ShoppingCartOutlinedIcon
          sx={{ color: { xs: "#000000", md: "#ffffff" }, margin: "0" }}
        />
      </StyledBadge>
    </IconButton>
  );
};

export { CartBadge };

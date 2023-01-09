import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "./header.css";

const pages = [
  { page: "Home", path: "/" },
  { page: "Productos", path: "/listado-de-productos" },
  { page: "Registrarse", path: "/registro-de-usuario" },
  { page: "Iniciar Sesión", path: "/inicio-de-sesion" },
  { page: "Perfil", path: "/mi-perfil" },
];

const Header = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile */}
          <PhoneIphoneIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              component="a"
              noWrap
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ecommerce
            </Typography>
          </ThemeProvider>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Link
                    className="link-mobile"
                    to={`${page.path}`}
                    key={page.page}
                    onClick={handleCloseNavMenu}
                  >
                    {page.page}
                  </Link>
                  {/* <Typography textAlign="center">{page.page}</Typography> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Big Screens */}
          <PhoneIphoneIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <ThemeProvider theme={theme}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ecommerce
            </Typography>
          </ThemeProvider>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
            }}
          >
            {pages.map((page) => (
              <Link
                className="link"
                to={`${page.path}`}
                key={page.page}
                onClick={handleCloseNavMenu}
              >
                {page.page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
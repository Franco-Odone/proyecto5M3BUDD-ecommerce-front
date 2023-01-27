import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Link,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { toast } from "react-toastify";

import { loadUser, loginUser } from "../../slicesDirectory/authSlice";

// Login
const InicioDeSesion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const theme = createTheme();

  useEffect(() => {
    auth._id && navigate("/cart-checkout");
  }, [auth._id, navigate]);

  useEffect(() => {
    auth.loginStatus === "success" &&
      toast.success("Sesión iniciada", {
        position: "bottom-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }, [auth.loginStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      loginUser({
        email: data.get("email"),
        password: data.get("password"),
      })
    );

    dispatch(loadUser(null));

    event.target.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="off"
                  autoFocus
                  InputLabelProps={{
                    style: {
                      color: "#000000",
                      fontWeight: "500",
                    },
                  }}
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="off"
                  InputLabelProps={{
                    style: {
                      color: "#000000",
                      fontWeight: "500",
                    },
                  }}
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {auth.loginStatus === "pending"
                ? "Registrando los datos..."
                : "Inicia Sesión"}
            </Button>
            <Link
              component={RouterLink}
              className="link"
              to={"/registro-de-usuario"}
              sx={{
                color: "#ffc622",
                textAlign: "center",
              }}
            >
              Si no estás registrado/a, hazlo dando click acá!
            </Link>
          </Box>
          {auth.loginStatus === "rejected" && (
            <Typography
              sx={{
                color: "#ffffff",
                backgroundColor: "#c62828",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              {auth.loginError}
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export { InicioDeSesion };

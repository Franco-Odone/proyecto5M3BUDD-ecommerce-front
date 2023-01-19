import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Slices/authSlice";

const RegistroDeUsuario = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      registerUser({
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
      })
    );

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
          <Typography component="h1" variant="h5">
            Regístrate
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
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
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              {auth.registerStatus === "pending"
                ? "Registrando los datos..."
                : "Regístrate"}
            </Button>
          </Box>
          {auth.registerStatus === "rejected" && (
            <Typography
              sx={{
                color: "#ffffff",
                backgroundColor: "#c62828",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              {auth.registerError}
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export { RegistroDeUsuario };

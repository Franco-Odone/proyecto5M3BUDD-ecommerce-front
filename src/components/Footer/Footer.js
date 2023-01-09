import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./footer.css";

const Copyright = () => {
  return (
    <Typography
      variant="h2"
      fontSize="16px"
      fontWeight="400"
      className="footer-typography"
    >
      {"Copyright © "}
      <a
        className="footer-link"
        href="https://github.com/Franco-Odone"
        target="_blank"
        rel="noreferrer"
      >
        Franco Odone
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export { Footer };

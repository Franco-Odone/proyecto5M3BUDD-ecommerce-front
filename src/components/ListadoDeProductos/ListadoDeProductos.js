import {
  Grid,
  Typography,
  Box,
  Container,
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductoIndividual } from "../ProductoIndividual/ProductoIndividual";

const ListadoDeProductos = () => {
  // usarlo cuando tenga la base de datos
  // const [cards, setCards] = useState([]);
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  let { storeProducts } = useContext(ProductContext);

  return (
    <Box
      sx={{
        bgcolor: "#01579b",
        pt: 0,
        pb: 6,
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          sx={{
            fontWeight: "500",
            color: "#ffc622",
            pt: "40px",
            pb: "40px",
          }}
        >
          Productos
        </Typography>
      </ThemeProvider>
      <Container sx={{ py: 0 }} maxWidth="md">
        <Grid container spacing={4}>
          {storeProducts.map((product) => (
            <Grid item key={crypto.randomUUID()} xs={12} sm={6} md={4}>
              <ProductoIndividual storeProducts={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { ListadoDeProductos };

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ListadoDeProductos = () => {
  return (
    <Box
      sx={{
        bgcolor: "#01579b",
        pt: 0,
        pb: 6,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        sx={{
          pt: "20px",
          pb: "20px",
        }}
      >
        Productos
      </Typography>
      <Container sx={{ py: 0 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#4c4c94",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "cover",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { ListadoDeProductos };

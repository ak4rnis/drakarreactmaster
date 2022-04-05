import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import useSyles from "../../theme/useStyles";
import { ProductoArray } from "../data/dataPrueba";

const Productos = (props) => {
    const miArray = ProductoArray;
    const verProducto = (id) => {
        props.history.push("/detalleProducto/" + id);
    }
    const classes = useSyles();
    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                {miArray.map(data => (
                    <Grid item lg={3} md={6} sm={6} xs={12} key={data.key}>
                        <Card>
                            <CardMedia
                            className={classes.media}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7TTf4NC4bmqicxvnbiP52kE5LEEC5XTkLw&usqp=CAU"
                            title="mi producto"
                            >
                                <Avatar variant="square" className={classes.price}>
                                    ${data.precio}
                                </Avatar>
                                
                            </CardMedia>
                            <CardContent>
                                    <Typography variant="h6" className={classes.text_card}>
                                        {data.titulo}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={() => verProducto(data.key)}
                                        >
                                            Mas Detalles
                                        </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                
            </Grid>
        </Container>
    )
}

export default Productos;
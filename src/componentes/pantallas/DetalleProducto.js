import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../theme/useStyles";

const DetalleProducto = (props) => {

    const agregarCarrito = () => {
        props.history.push("/carrito");
    }
    const classes = useStyles();

    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                RAFAAM
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper className={classes.PaperImg} variant="outlined" square>
                        <CardMedia 
                            className={classes.mediaDetalle} 
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7TTf4NC4bmqicxvnbiP52kE5LEEC5XTkLw&usqp=CAU" 
                        />
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Precio :</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2">$25.99</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Cantidad</Typography>
                                </TableCell>
                                <TableCell>
                                    <TextField size="small" select variant="outlined">
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>

                                    </TextField>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Button variant="contained" color="primary" size="large" onClick={agregarCarrito}>
                                        Agregar a Carrito
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: $25.99
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: Villano
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripcion: 
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Abrigo vaxi talla M, de algodon puro de color negro
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DetalleProducto;
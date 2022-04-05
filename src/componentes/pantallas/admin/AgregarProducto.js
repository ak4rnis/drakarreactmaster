import { Avatar, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../theme/useStyles";
import ImageUpload from "react-images-upload";

const AgregarProducto = () => {
    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Grid container justify="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        AGREGAR PRODUCTO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <TextField 
                            label="Nombre Producto" 
                            variant="outlined" 
                            fullWidth 
                            className={classes.gridmb}
                            InputLabelProps={{
                                shrink: true
                            }} 
                        />
                        <TextField 
                            label="Precio" 
                            variant="outlined" 
                            fullWidth 
                            className={classes.gridmb}
                            InputLabelProps={{
                                shrink: true
                            }} 
                        />
                        <TextField 
                            label="Marca" 
                            variant="outlined" 
                            fullWidth 
                            className={classes.gridmb}
                            InputLabelProps={{
                                shrink: true
                            }} 
                        />
                        <TextField 
                            label="Stock" 
                            variant="outlined" 
                            fullWidth 
                            className={classes.gridmb}
                            InputLabelProps={{
                                shrink: true
                            }} 
                        />
                        <TextField 
                            label="Descripcion" 
                            variant="outlined" 
                            fullWidth 
                            multiline
                            rows={4}
                            className={classes.gridmb}
                            InputLabelProps={{
                                shrink: true
                            }} 
                        />
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUpload
                                    withIcon={true}
                                    buttonText="Buscar Imagen"
                                    imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                    maxFileSize={9000000000000}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar
                                    variant="square"
                                    className={classes.avatarProducto} 
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary">
                            AGREGAR
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>

    )
}

export default AgregarProducto;
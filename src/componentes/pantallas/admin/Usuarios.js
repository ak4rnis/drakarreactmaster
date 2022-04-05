import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../theme/useStyles";

const Usuarios = (props) => {

    const editaUsuario = () => {
        const id = "23939278-4";
        props.history.push("/admin/usuario/"+id);
    }
    const classes = useStyles();
    return(
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Usuarios
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>23939278-4</TableCell>
                            <TableCell>Akarnis Drakari</TableCell>
                            <TableCell>devakarnis@hotmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained" color="secondary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuarios;
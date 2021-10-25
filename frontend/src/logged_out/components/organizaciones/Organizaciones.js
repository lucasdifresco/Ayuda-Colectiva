import React, { Fragment, useEffect } from "react";
import { 
  Grid, 
  Typography,
  Link, 
  Button, 
  Card, 
  withStyles, 
  withWidth, 
  Box
} from "@material-ui/core";
// > Formulario
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// < Formulario
import { provincias } from "../../data/provincias";

const theme = {
  spacing: 8,
}

const styles = theme =>({
  contentPaddingLg: {
    padding: "0 16px",
    [theme.breakpoints.up('sm')]: {
      padding: "0 128px",
    },
  },
  titleMargin: {
    margin: "22px 0",
  },
  h1Style: {
    fontSize: '1.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.4rem',
    },
    marginBottom: "12px",
    fontWeight: "500"
  },
  h2Style: {
    fontSize: '1.3rem',
    fontWeight: "400"
  },
  eventStyle: {
    marginBottom: "24px",
    fontSize: "0.85rem",
    [theme.breakpoints.up('sm')]: {
      marginBottom: "48px",
      fontSize: '1rem',
    },
  },
  selectMargin: {
    marginTop: "8px",
    marginBottom: "4px"
  },
  button: { 
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    color: '#FFFFFF',
    fontWeight: '500',
    margin: 'auto',
    marginTop: '10px'
  }
});

function Organizaciones(props) {
  const [provinciaValor, setProvincia] = React.useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setProvincia({value: event.target.value});
  };
  const { theme, classes } = props;

  return (
    <div className={classes.contentPaddingLg}>
      <Box style={{ backgroundColor: "#FFFFFF" }} pt={12} pb={8}>
        <Box>
          <Typography variant="h1" align="center" className={classes.h1Style} >
          Conectamos iniciativas de ONGs con personas que buscan ayudar
          </Typography>
          <Typography variant="body1" align="center">
          Si tenés una organización no gubernamental que brinde soporte a los incendios forestales en tu región, registrala para poder recibir contribuciones y voluntarios de todo el país. 
          <br/>
          Por cuestiones de seguridad, necesitamos validar a las agrupaciones antes de confirmar la inscripción. Una vez que hagamos esto, nos comunicaremos por mail para que puedas crear tu perfil y empezar a cargar iniciativas.  
          </Typography>
        </Box>
      </Box>

      <FormControl >
        <Grid container spacing={6} justify-content="space-around" >
          <Grid item lg={6} xs={12}>
              <TextField id="filled-basic" fullWidth label="Nombre completo de la entidad" 
                variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" fullWidth label="Domicilio" 
                variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" fullWidth label="Página web" 
                variant="filled" size="small" margin="dense"/>
              <TextField id="filled-basic" fullWidth label="Organismo que otorgó la personería jurídica" 
                variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" fullWidth label="Fecha de reconocimiento ante el organismo competente" 
                variant="filled" required size="small" margin="dense" />
          </Grid>
          
          <Grid item lg={6} xs={12}>
              <InputLabel id="myLabel">Provincia</InputLabel>
              <Select
                variant="filled" 
                required 
                size="small" 
                margin="dense"
                id="filled-basic" 
                fullWidth
                value={provinciaValor}
                labelId="myLabel"
                label="Provincia"
                className={classes.selectMargin}
                onChange={handleChange}
              >
                <MenuItem value="0"></MenuItem>
                {provincias.map((data) => {

                  return (
                    <MenuItem value={data.id}>{data.nombre}</MenuItem>
                  );

                })}
              </Select>
              <TextField id="filled-basic" fullWidth label="Número de teléfono" 
                variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" fullWidth label="Dirección de mail" 
                variant="filled" required size="small" margin="dense" />
              <TextField id="filled-basic" fullWidth label="Número de personería jurídica" 
                variant="filled" required size="small" margin="dense" />
              <TextField id="filled-basic" fullWidth label="Número de CUIT" 
                variant="filled" required size="small" margin="dense" />
          </Grid>
        </Grid>
        <Button variant="contained" disableElevation className={classes.button}>Enviar</Button>
      </FormControl>
    </div>
  );
}



export default withWidth()(withStyles(styles, { withTheme: true })(Organizaciones));

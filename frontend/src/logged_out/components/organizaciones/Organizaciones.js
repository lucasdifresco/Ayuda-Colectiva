import React, { Fragment, useEffect } from "react";
import { 
  Grid, 
  Typography,
  Link, 
  Button, 
  Card, 
  withStyles, 
  withWidth, 
  Box,
} from "@material-ui/core";
import { useState } from "react";
// > Formulario
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// < Formulario
import { provincias } from "../../data/provincias";
import { createOrganizacion } from "../../../controllers/api/api.organizaciones";

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

const defaultValues = {
  nombre: "",
  direccion: "",
  paginaWeb: "",
  provincia: "",
  telefono: "",
  nroPersoneriaJuridica: "",
  organismoPersoneriaJuridica: "",
  fechaOtorgamientoPersoneriaJuridica: "",
  cuit: ""
};

function Organizaciones(props) {

  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    createOrganizacion(formValues)
      .then(response => {
        if (response.success) {
          document.querySelector('#formulario-inscripcion').style.display = 'none';
          document.querySelector('#thank-you-message').style.display = 'block';

        } else {
          
          console.log("Error");
        }
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const { theme, classes } = props;

  return (
    <div className={classes.contentPaddingLg}>
      <div id="formulario-inscripcion">
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
        <form onSubmit={handleSubmit}>
          <FormControl  >
            <Grid container spacing={6} justify-content="space-around" >
              <Grid item lg={6} xs={12}>
                  <TextField id="filled-basic" fullWidth label="Nombre completo de la entidad" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="nombre"/>
                  <TextField id="filled-basic" fullWidth label="Domicilio" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="direccion"/>
                  <TextField id="filled-basic" fullWidth label="Página web" onChange={handleInputChange}
                    variant="filled" size="small" margin="dense" name="paginaWeb"/>
                  <TextField id="filled-basic" fullWidth label="Organismo que otorgó la personería jurídica" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="organismoPersoneriaJuridica"/>
                  <TextField id="filled-basic" fullWidth label="Fecha de reconocimiento ante el organismo competente" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="fechaOtorgamientoPersoneriaJuridica" />
              </Grid>
              
              <Grid item lg={6} xs={12}>
                  <TextField id="filled-basic" fullWidth label="Provincia" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="provincia" />
                  <TextField id="filled-basic" fullWidth label="Número de teléfono" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="telefono" />
                  <TextField id="filled-basic" fullWidth label="Dirección de mail" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="email" />
                  <TextField id="filled-basic" fullWidth label="Número de personería jurídica" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="nroPersoneriaJuridica"/>
                  <TextField id="filled-basic" fullWidth label="Número de CUIT" onChange={handleInputChange}
                    variant="filled" required size="small" margin="dense" name="cuit"/>
              </Grid>
            </Grid>
            <Button variant="contained" disableElevation className={classes.button} type="submit">Enviar</Button>
          </FormControl>
        </form>
      </div>
      <div id="thank-you-message" style={{display: 'none'}}>
        <Box style={{ backgroundColor: "#FFFFFF" }} pt={12} pb={8}>
          <Box>
            <Typography variant="h1" align="center" className={classes.h1Style} >
             Gracias por mandarnos tus datos!
            </Typography>
            <Typography variant="body1" align="center">
             Revisaremos tu solicitus y alguien de nuestro equipo se estará comunicando con vos en 48 horas hábiles. 
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}



export default withWidth()(withStyles(styles, { withTheme: true })(Organizaciones));

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
import { borderRadius } from "@material-ui/system";
// < Formulario

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
  button: { 
    width: "50%",
    backgroundColor: theme.palette.primary.light,
  }
});

function DetalleIniciativa(props) {
  
  const { theme, classes } = props;

  return (
    <div className={classes.contentPaddingLg}>
      <Box style={{ backgroundColor: "#FFFFFF" }} pt={12} pb={8}>
        <Typography variant="subtitle2" align="center" className={classes.eventStyle}>
          Incendios en El Bolsón
        </Typography>
        <Box>
          <Typography variant="h1" align="center" className={classes.h1Style} >
          Donar recursos para la reforestación
          </Typography>
          <Typography variant="subtitle1" align="center">
          Liderado por <Link href="#">Fundación Vida Silvestre</Link>
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={6} justify-content="space-around" >
        <Grid item lg={8} xs={12}>
          <div>
            <div>
              <img src="https://cdn.vox-cdn.com/thumbor/kDxyNNdQSrGDEJdCStUpR7ektDk=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19184784/DSC_0180__1_.jpg" 
                  width="100%" />
            </div>
            <Box mt={4} mb={8}>
              <Typography variant="h2" align="left" className={classes.h2Style}>
                Sobre esta iniciativa
                <br></br>
                <br></br>
              </Typography>
              <Typography variant="body1" paragraph align="left">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h2" align="left" className={classes.h2Style}>
                Sobre la organización
                <br></br>
                <br></br>
              </Typography>
              <Typography variant="body1" paragraph align="left">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </Typography>
            </Box>
          </div>
        </Grid>
        
        <Grid item lg={4} xs={12}>
          <Box>
            <Typography variant="h2" align="Left" className={classes.h2Style}>
              ¡Postulate para ayudar!
            </Typography>
            <br></br>
            <Typography align="Left">
              Le enviaremos tus datos a la organización para que se pongan en contacto con vos.
            </Typography>
            <Box>
            <FormControl fullWidth="true">
              <TextField id="filled-basic" label="Nombre" variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" label="Apellido" variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" label="Dirección de email" variant="filled" required size="small" margin="dense"/>
              <Button variant="contained" disableElevation className={classes.button}>Enviar</Button>
            </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}



export default withWidth()(withStyles(styles, { withTheme: true })(DetalleIniciativa));

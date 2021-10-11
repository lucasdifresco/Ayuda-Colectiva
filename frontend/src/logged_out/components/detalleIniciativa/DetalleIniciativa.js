import React, { Fragment, useEffect } from "react";
import { Grid, Typography, Card, Link, Button, Paper, withStyles, withWidth} from "@material-ui/core";
// > Formulario
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
// < Formulario

const theme = {
  spacing: 8,
}

const styles = theme =>({
  columnLeft: {
    paddingLeft: "64px",
    paddingRight: "16px",
  },
  columnRight: {
    paddingLeft: "16px",
    paddingRight: "64px",
  },
  contentPaddingLg: {
    padding: "0 16px",
    [theme.breakpoints.up('sm')]: {
      padding: "0 64px",
    },
  }
});

function DetalleIniciativa(props) {
  
  const { theme, classes } = props;

  return (
    <div className={classes.contentPaddingLg}>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-fluid lg-p-top">
          <Typography variant="h5" align="center">
           Incendios en El Bolsón
          </Typography>
          <Typography variant="h3" align="center">
           Donar recursos para la reforestación
          </Typography>
          <Typography variant="h5" align="center">
           Liderado por <Link>Fundación Vida Silvestre</Link>
          </Typography>
        </div>
      </div>

      <Grid container spacing={5} justify-content="space-around" >
        <Grid item lg={8} xs={12}>
          <div>
            <div>
              <img src="https://cdn.vox-cdn.com/thumbor/kDxyNNdQSrGDEJdCStUpR7ektDk=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19184784/DSC_0180__1_.jpg" 
                  width="100%" />
            </div>
            <div class="content-fluid">
              <Typography variant="h5" align="left">
                Sobre esta iniciativa
                <br></br>
                <br></br>
                <Typography variant="body2" paragraph align="left">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Typography>
              </Typography>
            </div>
            <div class="content-fluid">
              <Typography variant="h5" align="left">
                Sobre la organización
                <br></br>
                <br></br>
                <Typography variant="body2" paragraph align="left">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Typography>
              </Typography>
            </div>
          </div>
        </Grid>
        
        <Grid item lg={4} xs={12}>
          <div>
            <Typography  align="Left">
              ¡Postulate para ayudar!
            </Typography>
            <Typography  align="Left">
              Le enviaremos tus datos a la organización para que se pongan en contacto con vos.
            </Typography>
            <FormControl>
              <TextField id="filled-basic" label="Nombre" variant="filled" required size="small" margin="dense" />
              <TextField id="filled-basic" label="Apellido" variant="filled" required size="small" margin="dense"/>
              <TextField id="filled-basic" label="Dirección de email" variant="filled" required size="small" margin="dense"/>
              <Button variant="contained" disableElevation>Enviar</Button>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}



export default withWidth()(withStyles(styles, { withTheme: true })(DetalleIniciativa));

import React from "react";
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
import './styles.css'

const styles = theme =>({
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
  imgWrapper: {
    height: '150px',
    borderRight: '1px solid #C3C3C3'
  },
  verticalAlign: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  infoWrapper: {
    display: 'table',
    width: '100%',
    height: '100%'
  },
  btnStyle: {
    backgroundColor: '#8DD580',
    "&:hover": {
      backgroundColor: "#5BA353"
    },
  }
});

function Eventos(props) {

  const { theme, classes } = props;
  //Hay que poner un hook que al iniciar le pida al backend le pida el arreglo
  //

  return (
    
    <Box pt={12}>
      <Box pt={6} pb={8}>
        <Typography variant="h1" align="center" className={classes.h1Style} >
          Incendios en El Bolsón
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={2} className="blog-post">
          <Grid item lg={2} className={classes.imgWrapper}>
            <img src="https://wwfar.awsassets.panda.org/img/logofusa_13643.jpg" alt="" className="blog-post__img"/>
          </Grid>
          <Grid item lg={8} style={{padding: '20px'}}> 
            <div className={classes.infoWrapper}>
              <Typography className={classes.verticalAlign} variant="body1">Donar recursos para la reforestación</Typography> 
            </div>
          </Grid>
          <Grid item lg={2}> 
            <div className={classes.infoWrapper}>
              <div className={classes.verticalAlign}>
                <Button href="/iniciativa" className={classes.btnStyle} >Saber mas</Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="blog-post">
          <Grid item lg={2} className={classes.imgWrapper}>            
            <img src="https://wwfar.awsassets.panda.org/img/logofusa_13643.jpg" alt="" className="blog-post__img"/>
          </Grid>
          <Grid item lg={8} style={{padding: '20px'}}> 
            <div className={classes.infoWrapper}>
              <Typography className={classes.verticalAlign} variant="body1">Participar de las jornadas de reforestación</Typography> 
            </div>
          </Grid>
          <Grid item lg={2}> 
            <div className={classes.infoWrapper}>
              <div className={classes.verticalAlign}>
                <Button href="/iniciativa" className={classes.btnStyle} >Saber mas</Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="blog-post">
          <Grid item lg={2} className={classes.imgWrapper}>
            <img src="http://www.plantarse.org/images/plantarse.jpg" alt="" className="blog-post__img"/>
          </Grid>
          <Grid item lg={8} style={{padding: '20px'}}> 
            <div className={classes.infoWrapper}>
              <Typography className={classes.verticalAlign} variant="body1">Donar plata para brindar ayuda a las familias afectadas</Typography> 
            </div>
          </Grid>
          <Grid item lg={2}> 
            <div className={classes.infoWrapper}>
              <div className={classes.verticalAlign}>
                <Button href="/iniciativa" className={classes.btnStyle} >Saber mas</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default withStyles(styles, { withTheme: true })(Eventos);
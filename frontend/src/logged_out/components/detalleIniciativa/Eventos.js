import React, { useState, useEffect } from "react";
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
import { listarIniciativas } from "../../../controllers/api/api.iniciativas";

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
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    color: '#FFFFFF',
    fontWeight: '500',
    margin: 'auto',
    height: '48px'
  }
});

function Eventos(props) {

  const { theme, classes } = props;
  const incendioId = props.match.params.idEvento;
  
  const [listadoIniciativas, setIniciativas] = useState(null);
  useEffect(() => { 

    const getIniciativas = async () => {
      const data = await listarIniciativas(incendioId);
      setIniciativas(data.response);
    }
    getIniciativas();
  }, []);

  return ( listadoIniciativas && (
    
    <Box pt={12}>
      <Box pt={6} pb={8}>
        <Typography variant="h1" align="center" className={classes.h1Style} >
         {listadoIniciativas[0].eventoDetalle.titulo}
        </Typography>
      </Box>

      <Box>
        {listadoIniciativas && (listadoIniciativas.map((listadoIniciativas, index) => (
        <Grid container spacing={2} className="blog-post" key={index}>
          <Grid item lg={2} className={classes.imgWrapper}>
            <img src={listadoIniciativas.organizacionDetalle.logo} alt="" className="blog-post__img"/>
          </Grid>
          <Grid item lg={8} style={{padding: '20px'}}> 
            <div className={classes.infoWrapper}>
              <Typography className={classes.verticalAlign} variant="body1">{listadoIniciativas.titulo}</Typography> 
            </div>
          </Grid>
          <Grid item lg={2}> 
            <div className={classes.infoWrapper}>
              <div className={classes.verticalAlign}>
                <Button href={'/iniciativa/' + listadoIniciativas.id} variant="contained" disableElevation className={classes.btnStyle} >Saber mas</Button>
              </div>
            </div>
          </Grid>
        </Grid>
        )))}
      </Box>
    </Box>
  ));
}

export default withStyles(styles, { withTheme: true })(Eventos);
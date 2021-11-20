import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import headerImage from "../../dummy_data/images/headerImage.jpg";
import WaveBorder from "../../../shared/components/WaveBorder";
import Banner from "../../dummy_data/images/banner.png";

const styles = theme => ({

  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    // backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4]
  },
  headSectionContainer: {
    backgroundImage: 'url("/images/tim-marshall-cAtzHUz7Z8g-unsplash.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
  },
  container: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '64px',
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: '56px',
      width: '80%',
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  },
  containerTexto: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: {
    fontSize: '4rem',
    fontFamily: '"Montserrat", sans-serif',
    color: 'white',
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.7rem',
    }
  },
  logo: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: "400",
    fontSize: '4.2rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '3rem',
    }
  },
  descripcion: {
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    fontFamily: '"Montserrat", sans-serif',
    paddingTop: '20px',
    maxWidth: '70%',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.2rem',
      maxWidth: '100%',
    }
  },
  verEventos: {
    height: '48px',
    marginTop: '40px',
    backgroundColor: '#8DD580',
    '&:hover': {
      backgroundColor: '#5BA353'
    },
    fontWeight: '600'
  },
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames(classes.wrapper, classes.headSectionContainer)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className={classNames("container-fluid", classes.containerTexto)}>
              <Typography variant="h1" className={classes.titulo}>Bienvenido a <br/><span className={classes.logo}>AyudaColectiva</span></Typography>
              <Typography variant="body1" className={classes.descripcion}>Potenciamos las acciones de respuesta a incendios forestales conectando ONGs locales con personas de todo el país</Typography>
              <Button href="#eventosActivos" variant="contained" disableElevation className={classes.verEventos} >Quiero ayudar!</Button>
          </Box>
        </div>
      </div>
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);

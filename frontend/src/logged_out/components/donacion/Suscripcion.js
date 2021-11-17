import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import { borderRadius, flexbox } from "@material-ui/system";
// < Formulario
import { createPreference } from "../../../controllers/api/api.mercadopago";
import useMercadoPago from '../../../controllers/hooks/useMercadoPago';

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
    maxWidth: "80%",
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    color: '#FFFFFF',
    fontWeight: '500',
    margin: 'auto',
    marginTop: '10px',
    display: 'block'
  },
  otroContainer: {
    display: 'flex'
  },
  inputMonto: {
    maxWidth: '100px',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '0'
  },
  radioMonto: {
    display: 'inline-block'
  }
});

const defaultValues = {
  monto: 100,
  montoPersonalizado: null
};

function Suscripcion(props) {
  
  const { theme, classes } = props;
  const history = useHistory();
  const [formValues, setFormValues] = useState(defaultValues);

  const mercadopago = useMercadoPago();

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      quantity: 1,
      description: "Donar recursos para la reforestación - Fundación Vida Silvestre",
      price: formValues.monto
    };

    if(formValues.montoPersonalizado !== undefined
      && formValues.montoPersonalizado !== null) {
      orderData.price = formValues.montoPersonalizado;
    }

    createPreference(orderData)
      .then(response => {
        if (response.success) {
          console.log(response);
          history.push(
            "/checkout",
            [{
              preferenceId: response.response.id,
              preference: orderData,
              mpObject: mercadopago
            }])

        } else {
          
          console.log("Error");
        }
      });
   
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  return (
    <div className={classes.contentPaddingLg}>
      <h1>Suscripciones</h1>
    </div>
  );
}



export default withWidth()(withStyles(styles, { withTheme: true })(Suscripcion));

import { Typography, Box } from '@material-ui/core';
import { useEffect } from 'react';
import { withWidth, withStyles, Card } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { crearBotonDePago } from '../../../controllers/api/api.mercadopago';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const styles = theme => ({
  containerPayment: {
    maxWidth: "40%",
    padding: "50px",
    margin: "auto",
    marginTop: "100px",
   // padding: "0 16px",
  /*  [theme.breakpoints.up('sm')]: {
      padding: "0 128px",
    },*/
  },
  mainTitle: {
    fontSize: '1.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    marginBottom: "35px",
    fontWeight: "500"
  },
  title: {
    fontSize: '1.5rem',
  },
  blockHeading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  backIcon: {
    height: "5px"
  }

})

function Checkout(props) {
    const { theme, classes } = props;
    const location = useLocation();
    const preference = location.state[0].preference;
    const preferenceId = location.state[0].preferenceId;
    const mercadopago = location.state[0].mpObject;
    const history = useHistory();
    const idIniciativa = location.state[0].idIniciativa;

    useEffect(() => {
        //crearBotonDePago(preferenceId);

        if(mercadopago !== null){
            // Initialize the checkout
            mercadopago.checkout({
            preference: {
                id: preferenceId
            },
            render: {
                container: '#button-checkout', // Class name where the payment button will be displayed
                label: 'Pagar con MercadoPago', // Change the payment button text (optional)
            }, 
            theme: {
                elementsColor: "#007536",
                headerColor: "#007536"
            }
            });
        }
    });

    const goBack = (e) => {
      history.push("/iniciativa/" + idIniciativa);
    };

    return (
        <Card variant="outlined" className={classes.containerPayment}>
          <Box className={classes.blockHeading}>
            <Typography variant="h2" className={classes.mainTitle}>Resumen de tu donación</Typography>
          </Box>
          <div className="form-payment">
            <div className="products">
              <div className="item" style={{borderBottom: "1px solid #cacaca"}}>
                <p className="item-name" style={{fontSize: "1.2rem", padding: "20px 0"}}>{preference.description} x <span id="summary-quantity">{preference.quantity}</span></p>
              </div>
              <div className="total" style={{fontSize: "1.2rem", padding: "20px 0"}}>Total<span className="price" id="summary-total" style={{float:"right"}}>$ {preference.price}</span></div>
            </div>
            <div className="payment-details" >
              <div className="form-group col-sm-12">
                <br/>      
                <div id="button-checkout" width="100%" style={{textAlign: "center"}}>
                </div>                 
                <br/>
                <a id="go-back" onClick={goBack} style={{fontSize: "0.8rem", cursor: "pointer", color: "#009ee3"}}>
                  
                  &#60; Volver a la iniciativa
                </a>
              </div>
            </div>
          </div>
        </Card>
    )   
}

export default withWidth()(withStyles(styles, { withTheme: true })(Checkout))
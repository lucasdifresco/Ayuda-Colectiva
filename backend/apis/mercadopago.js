require('dotenv').config();

// Mercado Pago SDK
const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});
  
module.exports = {
    createPreference(req, res)
    {
      let preference = {
        items: [
          {
            title: req.body.description,
            unit_price: Number(req.body.price),
            quantity: Number(req.body.quantity),
          }
        ],
        back_urls: {
          "success": "http://localhost:8080/feedback",
          "failure": "http://localhost:8080/feedback",
          "pending": "http://localhost:8080/feedback"
        },
        auto_return: "approved",
      };
      mercadopago.preferences.create(preference)
        .then(function (response) {
          res.json({
            id: response.body.id
          });
        }).catch(function (error) {
          console.log(error);
        });
    },
    
}




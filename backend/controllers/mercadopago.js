require('dotenv').config();
var fetch = require('node-fetch');

// Mercado Pago SDK
const mercadopago = require ('mercadopago');
// Add Your credentials
mercadopago.configure({ access_token: process.env.MERCADOPAGO_ACCESS_TOKEN });
  
module.exports = {
  createPreference(req, res) {
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
      .then(response => { res.status(200).send({ id: response.body.id }); })
      .catch(error => { res.status(400).send({ message: "Error al intentar crear preferencias de mercadopago.", error }) });
  },
  createPlan(req, res) {
    var parametros = {
      titulo: req.body.titulo,
      monto: req.body.monto,
      meses: req.body.meses
    }
    return fetch('https://api.mercadopago.com/preapproval_plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.MERCADOPAGO_ACCESS_TOKEN
      },
      body: JSON.stringify({
        "back_url": "https://www.mercadopago.com.ar",
        "reason": parametros.titulo,
        "auto_recurring": {
          "frequency": "1",
          "frequency_type": "months",
          "transaction_amount": parametros.monto,
          "currency_id": "ARS",
          "repetitions": parametros.meses,
        }
      })
    })
      .then(result => { res.status(200).send(result) })
      .catch(error => res.status(400).send({ message: "Error al intentar crear el plan de suscripcion de mercadopago.", error }));
  },
  suscribeToPlan(req, res) {
    var parametros = {
      planId: req.body.planId,
      cardToken: req.body.cardToken,
      payerEmail: req.body.payerEmail
    }
    return fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.MERCADOPAGO_ACCESS_TOKEN
      },
      body: JSON.stringify({
        "preapproval_plan_id": parametros.planId,
        "card_token_id": parametros.cardToken,
        "payer_email": parametros.payerEmail
      })
    })
      .then(result => { res.status(200).send(result) })
      .catch(error => res.status(400).send({ message: "Error al intentar crear la suscripcion de mercadopago.", error }));
  }
}




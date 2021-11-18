const nodemailer = require('nodemailer');

module.exports = {
  enviarMail(req, res) {
    var parametros = {
      destino: req.body.destino,
      sujeto: req.body.sujeto,
      contenido: req.body.contenido,
      html: req.body.html,
    }
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: "Gmail",
      auth: {
        user: 'contact.ayudacolectiva@gmail.com',
        pass: 'INSERT PASSWORD'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
      
    var mailOptions = {
      from: "<contact.ayudacolectiva@gmail.com>",
      to: parametros.destino,
      subject: parametros.sujeto,
      text: parametros.contenido,
      html: parametros.html
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) { res.status(400).send(error.message); }
      else { res.status(200).send({ success: true, message: 'done' }); }
    });
  },
}
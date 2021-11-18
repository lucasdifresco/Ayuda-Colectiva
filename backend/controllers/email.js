require('dotenv').config();
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
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    
    
    var mailOptions = {
      from: "<" + process.env.MAIL_USER + ">",
      to: parametros.destino,
      subject: parametros.sujeto,
      text: parametros.contenido,
      html: parametros.html
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) { res.status(400).send(error.message); }
      else { res.status(200).send({ success: true, message: 'done' }); }
    });
  }
}
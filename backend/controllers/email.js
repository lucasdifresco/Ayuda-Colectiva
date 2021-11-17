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
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: 'apikey',
        pass: 'emailPass'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
      
    var mailOptions = {
      from: "<info@lizardcode.com.ar>",
      to: parametros.destino,
      subject: parametros.sujeto,
      text: parametros.contenido,
      html: parametros.html
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) { res.status(400).send(error.message); }
      else {
        console.log("mail enviado");
        console.log(res.json(info.response));
        console.log("mensaje enviado", info.messageId);
        console.log("mensaje url", nodemailer.getTestMessageUrl(info));
        res.status(200).send({ success: true, message: 'done' });
      }
    });
  }
}
const nodemailer = require('nodemailer');

module.exports = {
     enviarMail(mail){
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,  
            service: 'Gmail',
            auth:{
              user: 'mariagutierrezas1@gmail.com',
              pass: 'paciente'
            },
                  tls: {
                rejectUnauthorized: false
            }
          });
      
          var mailOptions ={
            from: "mariagutierrezas1@gmail.com",
            to: mail,
            subject: "Registro-",
            text: "El registro se ha realizado correctamente.",
            html: "<b>El registro se ha realizado correctamente.</b>"
          };
      
          transporter.sendMail(mailOptions,(error,info)=>{
            if(error)
            {
            //   res.status(500).send(error.message);
            }
      
            else{
              console.log("mail enviado");
              console.log(res.json(info.response));
              console.log("mensaje enviado",info.messageId );
              console.log("mensaje url",nodemailer.getTestMessageUrl(info));
      
              res.send({
                success:true,
                message:'done'
              });
            }
          });
    }  
}
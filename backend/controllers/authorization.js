require('dotenv').config();
var jwt = require('jsonwebtoken');

module.exports = {
    administrador(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = process.env.ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != process.env.ROL_ADMINISTRADOR) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Administrador para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    },
    organizacion(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = process.env.ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != process.env.ROL_ORGANIZACION) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Organizacion para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    },
    donante(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = process.env.ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != process.env.ROL_DONANTE) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Donante para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    }
};


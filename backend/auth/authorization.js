var jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = "0807a101f4ed349c5a5c0bcde06e4feb3f12f4b47de7c007adc129435c9742291f9c38add730813fe5aa0054dddf2fb94046fd55a3c226b7eb4445cf5898b614";
const ROL_ADMINISTRADOR = 1;
const ROL_ORGANIZACION = 2;
const ROL_DONANTE = 3;

module.exports = {
    administrador(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != ROL_ADMINISTRADOR) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Administrador para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    },
    organizacion(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != ROL_ORGANIZACION) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Organizacion para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    },
    donante(req, res, next) {

        var token = req.headers['x-access-token'];
        if (!token) { res.status(500).send({ auth: false, message: 'No se envio inguna Token en el header. Por favor, enviar un token valido a en el header con la clave "x-access-token".' }); }

        let sec = ACCESS_TOKEN_SECRET;
        jwt.verify(token, sec, function (err, decoded) {
            if (err || decoded.rol != ROL_DONANTE) { res.status(500).send({ auth: false, message: 'Se requiere Rol de Donante para poder acceder a esta configuracion.' }); }
            req.id = decoded.id;
            req.rol = decoded.rol;
            next();
        });
    }
};


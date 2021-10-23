var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const db = require('../models');
const usuarios = db.usuarios;
const administradores = db.perfilAdministradores;
const organizaciones = db.perfilOrganizaciones;
const donantes = db.perfilDonantes;

module.exports = {
    crear(req, res)
    {
        var user;
        switch (req.body.rol)
        {
            case process.env.ROL_ADMINISTRADOR: user = administradores.crear(req, res); break;
            case process.env.ROL_ORGANIZACION: user = organizaciones.crear(req, res); break;
            case process.env.ROL_DONANTE: user = donantes.crear(req, res); break;
            default: return;
        }
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        return usuarios
            .create({
                email: req.body.email,
                password: hashedPassword,
                rol: req.body.rol,
                id: user.id
            })
            .then( result => res.status(200).send(result))
            .catch( error => res.status(400).send(error))
    },
    modificar (req, res) {
        return usuarios
            .findOne({ where: { id: req.body.id } })
            .then(usuario => {
                var hashedPassword = bcrypt.hashSync(req.body.password, 8);
                usuario
                    .update({ password: hashedPassword })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    autenticar (req, res) {
        return usuarios
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                var passwordIsValid = bcrypt.compareSync(result.password, req.body.password);
                if (!passwordIsValid) { res.status(400).send({ message:'Invalid username or pasword.' }) }
                var token = jwt.sign({ id: result.id, rol: result.rol }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 86400 });
                return { token: token, user: result };
            })
            .catch(error => res.status(400).send({ message: 'Invalid username or pasword.' }))
    }
}
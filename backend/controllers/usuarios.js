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
            case 0: user = administradores.crear(req, res); break;
            case 1: user = organizaciones.crear(req, res); break;
            case 2: user = donantes.crear(req, res); break;
        }
        
        return usuarios
            .create({
                email: req.body.email,
                password: req.body.password,
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
                usuario
                    .update({ password:req.body.password })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    autenticar (req, res) {
        return usuarios
            .findOne({ where: { id: req.body.id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
}
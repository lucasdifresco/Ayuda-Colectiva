const db = require('../models');
const administradores = db.perfilAdministradores;

module.exports = {
    crear(req, res)
    {
        return administradores
            .create({
            nombre: req.body.nombre,
            apellido: req.body.apellido
        })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    ver(req, res) {
        return administradores
            .findOne({ where: { id: req.body.id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
}
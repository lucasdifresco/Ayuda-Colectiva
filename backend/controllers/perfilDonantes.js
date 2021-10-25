const db = require('../models');
const donantes = db.perfilDonantes;

module.exports = {
    crear(req, res) {
        return donantes
            .create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                validacion: true,
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    validar(req, res) {
        return donantes
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                result
                    .update({ validacion: req.body.validacion })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    ver(req, res) {
        return donantes
            .findOne({ where: { id: req.body.id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    listarPorValidacion(req, res) {
        return donantes
            .findAll({ where: { validacion: req.body.validacion } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
}
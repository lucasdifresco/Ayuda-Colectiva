const db = require('../models');
const posulaciones = db.posulaciones;

module.exports = {
    crear(req, res) {
        return posulaciones
            .create({
                donante: req.body.donante,
                iniciativa: req.body.iniciativa,
                fecha: req.body.fecha,
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    listar(req, res) {
        return posulaciones
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorIniciativa(req, res) {
        return posulaciones
            .findAll({ where: { iniciativa: req.body.iniciativa } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorDonante(req, res) {
        return posulaciones
            .findAll({ where: { donante: req.body.donante } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorFecha(req, res) {
        return posulaciones
            .findAll({ where: { fecha: req.body.fecha } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    listarEntreFechas(req, res) {
        return posulaciones
            .findAll({ where: { fecha: req.body.fecha } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     }
}
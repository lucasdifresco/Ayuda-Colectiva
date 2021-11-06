const db = require('../models');
const posulaciones = db.posulaciones;
const iniciativas = db.iniciativas;
const donantes = db.donantes;

module.exports = {
    crear(req, res) {
        var parametros = {
            donante: req.body.idDonante,
            iniciativa: req.body.idIniciativa,
        }
        return iniciativas.findOne({ where: { id: parametros.iniciativa } })
            .then(results => {
                if (results === null) { res.status(400).send({ message: "Iniciativa no encontrada." }) }
                else {
                    donantes.findOne({ where: { id: parametros.donante } })
                        .then(results => {
                            if (results === null) { res.status(400).send({ message: "Donante no encontrado." }) }
                            else {
                                posulaciones.create({
                                    donante: parametros.donante,
                                    iniciativa: parametros.iniciativa,
                                    fecha: new Date(Date.now()).toISOString()
                                })
                                    .then(result => res.status(200).send({ message: "Postulacion creada.", result }))
                                    .catch(error => res.status(400).send({ message: "Error al intentar crear la postulación.", error }))
                            }
                        }).catch(error => res.status(400).send({ message: "Error al intentar buscar el donante.", error }))
                }
            }).catch(error => res.status(400).send({ message: "Error al intentar buscar la iniciativa.", error }))
        
    },
    ver(req, res) {
        var parametros = {
            id: req.params.id,
        }
        return posulaciones
            .findOne({ where: { id: parametros.id } })
            .then(result => res.status(200).send({ message: "Encontrado", result }))
            .catch(error => res.status(400).send({ message: "Ocurrio un error al intentar conseguir la postulacion.", error }))
    },
    listar(req, res) {
        var parametros = { }
        return posulaciones
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las postulaciones.", error }))
     },
    listarPorIniciativa(req, res) {
        var parametros = {
            iniciativa: req.body.idIniciativa,
        }
        return posulaciones
            .findAll({ where: { iniciativa: parametros.iniciativa } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las postulaciones.", error }))
     },
    listarPorDonante(req, res) {
        var parametros = {
            donante: req.body.idDonante,
        }
        return posulaciones
            .findAll({ where: { donante: parametros.donante } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las postulaciones.", error }))
     },
    listarPorFecha(req, res) {
        var parametros = {
            fecha: req.body.fecha,
        }
        return posulaciones
            .findAll({ where: { fecha: parametros.fecha } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las postulaciones.", error }))
    },
    listarEntreFechas(req, res) {
        var parametros = {
            inicio: req.body.inicio,
            fin: req.body.fin
        }
        return posulaciones
            .findAll({ where: { from: { $between: [parametros.inicio, parametros.fin] } } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las postulaciones.", error }))
     }
}
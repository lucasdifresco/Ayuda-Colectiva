const db = require('../models');
const iniciativas = db.iniciativas;

module.exports = {
    crear(req, res)
    {
        return iniciativas
            .create({
                titulo: req.body.titulo,
                aprobacion: false,
                organizacion: req.body.organizacion,
                evento: req.body.evento,
                descripcion: req.body.descripcion,
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    modificar(req, res)
    {
        return iniciativas
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                result
                    .update({ titulo: req.body.titulo, descripcion: req.body.descripcion })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
     },
    aprobar(req, res)
    {
        return iniciativas
        .findOne({ where: { id: req.body.id } })
        .then(result => {
            result
                .update({ aprobacion: req.body.aprobacion })
                .then(result => res.status(200).send(result))
                .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
     },
    ver(req, res)
    {
        return iniciativas
            .findOne({ where: { id: req.body.id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    listar(req, res)
    {
        return iniciativas
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorEvento(req, res)
    {
        return iniciativas
            .findAll({ where: { evento: req.body.evento } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorOrganizacion(req, res) {
        return iniciativas
            .findAll({ where: { organizacion: req.body.organizacion } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    listarPorAprobacion(req, res) {
        return iniciativas
            .findAll({ where: { aprobacion: req.body.aprobacion } })
            .then(result => res.status(200).send(result) )
            .catch(error => res.status(400).send(error))
    }
}
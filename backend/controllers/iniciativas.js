const db = require('../models');
const iniciativas = db.iniciativas;
const organizaciones = db.organizaciones;
const eventos = db.eventos;

module.exports = {
    crear(req, res)
    {
        var parametros = {
            titulo: req.body.titulo,
            organizacion: req.body.idOrganizacion,
            evento: req.body.idEvento,
            descripcion: req.body.descripcion,
            createdAt: new Date(Date.now()).toISOString()
        }

        return organizaciones.findOne({ where: { id: parametros.organizacion } })
            .then(results => {
                if (results === null) { res.status(400).send({ message: "Organizacion no encontrada." }) }
                else {
                    eventos.findOne({ where: { id: parametros.evento } })
                        .then(results => {
                            if (results === null) { res.status(400).send({ message: "Evento no encontrada." }) }
                            else {
                                iniciativas.create({
                                    titulo: parametros.titulo,
                                    aprobacion: false,
                                    organizacion: parametros.organizacion,
                                    evento: parametros.evento,
                                    descripcion: parametros.descripcion,
                                    createdAt: parametros.createdAt
                                })
                                .then(result => res.status(200).send({ message: "Iniciativa creada.", result }))
                                .catch(error => res.status(400).send({ message: "Error al intentar crear la iniciativa.", error }))
                            }
                        }).catch(error => res.status(400).send({ message: "Error al intentar buscar el evento.", error }))
                }
             }).catch(error => res.status(400).send({ message: "Error al intentar buscar la organizacion.", error }))
     },
    modificar(req, res)
    {
        var parametros = {
            id: req.body.id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            aprobacion: req.body.aprobacion
        }

        return iniciativas.findOne({ where: { id: parametros.id } })
            .then(result => {
                if (result === null) { res.status(400).send({ message: "Iniciativa no encontrada." }) }
                else {
                    if (parametros.titulo == null) { parametros.titulo = result.titulo; }
                    if (parametros.descripcion == null) { parametros.descripcion = result.descripcion; }
                    if (parametros.aprobacion == null) { parametros.aprobacion = result.aprobacion; }
                    result
                        .update({ titulo: parametros.titulo, descripcion: parametros.descripcion, aprobacion: parametros.aprobacion})
                        .then(result => res.status(200).send({ message: "Iniciativa modificada.", result }))
                        .catch(error => res.status(400).send({ message: "Error al intentar modificar la iniciativa.", error }))
                }
            })
            .catch(error => res.status(400).send({ message: "Error al intentar buscar la iniciativa.", error }))
     },
    aprobar(req, res)
    {
        var parametros = {
            id: req.body.id,
            aprobacion: req.body.aprobacion
        }
        return iniciativas.findOne({ where: { id: parametros.id } })
            .then(result => {
                if (result === null) { res.status(400).send({ message: "Iniciativa no encontrada." }) }
                else {
                    if (parametros.aprobacion == null) { parametros.aprobacion = !result.aprobacion; }
                    result
                        .update({ aprobacion: parametros.aprobacion })
                        .then(result => res.status(200).send({ message: "Iniciativa modificada.", result }))
                        .catch(error => res.status(400).send({ message: "Error al intentar modificar la iniciativa.", error }))
                }
            })
            .catch(error => res.status(400).send({ message: "Error al intentar buscar la iniciativa.", error }))
     },
    ver(req, res)
    {
        var parametros = {
            id: req.params.id
        }
        return iniciativas
            .findOne({ where: { id: parametros.id } })
            .then(result => res.status(200).send({ message: "Iniciativa encontrada.", result }))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar la iniciativa.", error }))
    },
    listar(req, res)
    {
        var parametros = { }
        return iniciativas
            .findAll({ include: [{ model: organizaciones, as: "organizaciones" }] })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las iniciativas.", error }))
     },
    listarPorEvento(req, res)
    {
        var parametros = {
            evento: req.params.idEvento
        }
        return iniciativas
            .findAll({ where: { evento: parametros.evento, aprobacion: true } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las iniciativas.", error }))
     },
    listarPorOrganizacion(req, res) {
        var parametros = {
            organizacion: req.params.idOrganizacion
        }
        return iniciativas
            .findAll({ where: { organizacion: parametros.organizacion } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las iniciativas.", error }))
    },
    listarAprobadas(req, res) {
        var parametros = { }
        return iniciativas
            .findAll({ where: { aprobacion: true } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las iniciativas.", error }))
    },
    listarPorAprobacion(req, res) {
        var parametros = {
            aprobacion: req.params.aprobacion
        }
        return iniciativas
            .findAll({ where: { aprobacion: parametros.aprobacion } })
            .then(result => res.status(200).send(result) )
            .catch(error => res.status(400).send({ message: "Error al intentar buscar las iniciativas.", error }))
    }
}
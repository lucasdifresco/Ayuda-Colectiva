const db = require('../models');
const eventos = db.eventos;

module.exports = {
    crear(req, res) {
        return eventos
            .create({
                titulo: req.body.titulo,
                estado: req.body.estado,
                descripcion: req.body.descripcion,
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    modificar(req, res) {
        return eventos
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                result
                    .update({ titulo: req.body.titulo, descripcion: req.body.descripcion })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    cambiarEstado(req, res) {
        return eventos
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                result
                    .update({ estado: req.body.estado })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    listar(req, res) {
        return eventos
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
}
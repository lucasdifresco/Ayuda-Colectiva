const db = require('../models');
const organizaciones = db.perfilOrganizaciones;

module.exports = {
    crear(req, res)
    {
        return organizaciones
            .create({
            nombre: req.body.nombre,
            mision: req.body.mision,
            fechaDeAlta: req.body.fechaDeAlta,
            aprobacion: false,
        })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    aprobar(req, res)
    {
        return organizaciones
            .findOne({ where: { id: req.body.id } })
            .then(result => {
                result
                    .update({ aprobacion: req.body.aprobacion })
                    .then(result => res.status(200).send(result))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
     },
    ver(req, res) {
        return organizaciones
            .findOne({ where: { id: req.body.id } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     },
    listarPorAprobacion(req, res)
    {
        return organizaciones
            .findAll({ where: { aprobacion: req.body.aprobacion } })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
     }
}
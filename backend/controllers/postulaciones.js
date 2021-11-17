const db = require('../models');
var bcrypt = require('bcryptjs');
const emailCTLR = require('../controllers/email');
const posulaciones = db.posulaciones;
const iniciativas = db.iniciativas;
const donantes = db.donantes;
const usuarios = db.usuarios;
const ROL_DONANTE = 3;

module.exports = {
    crear(req, res) {
        var parametros = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            iniciativa: req.body.idIniciativa,
        }
        return iniciativas.findOne({ where: { id: parametros.iniciativa } })
            .then(results => {
                if (results === null) { res.status(400).send({ message: "Iniciativa no encontrada." }) }
                else {
                    usuarios.findOne({ where: { email: parametros.email } })
                        .then(results => {
                            if (results === null) {
                                var nuevoDonante =
                                {
                                    email: parametros.email,
                                    password: "123",
                                    nombre: parametros.nombre,
                                    apellido: parametros.apellido
                                }
                                return donantes
                                    .create({
                                        id: null,
                                        nombre: nuevoDonante.nombre,
                                        apellido: nuevoDonante.apellido,
                                        validacion: 1
                                    })
                                    .then(result => {
                                        console.log(result);
                                        return usuarios
                                            .create({
                                                email: nuevoDonante.email,
                                                password: bcrypt.hashSync(nuevoDonante.password, 8),
                                                rol: ROL_DONANTE,
                                                id: result.id,
                                            })
                                            .then(usuario => {
                                                posulaciones.create({
                                                    donante: usuario.id,
                                                    iniciativa: parametros.iniciativa,
                                                    fecha: new Date(Date.now()).toISOString()
                                                })
                                                    .then(result => {
                                                        var contenidoMail = {
                                                            body: {
                                                                destino: nuevoDonante.email,
                                                                sujeto: "Ayuda Colectiva - Nueva inscripción",
                                                                contenido: "Te has subscripto para ayudar en la iniciativa ",
                                                            }
                                                        }
                                                        emailCTLR.enviarMail(contenidoMail);
                                                        res.status(200).send({ message: "Postulacion creada.", result })
                                                    })
                                                    .catch(error => res.status(400).send({ message: "Error al intentar crear la postulación.", error }))
                                            })
                                            .catch(error => res.status(400).send({ message: 'Ocurrio un error al intentar crear el usuario.', error }))
                                    })
                                    .catch(error => res.status(400).send({ message: 'Ocurrio un error al intentar crear el donante.', error }))
                            } else {
                                donantes
                                    .findOne({ where: { id: results.id } })
                                    .then(results => {
                                        posulaciones.create({
                                            donante: result.donante,
                                            iniciativa: parametros.iniciativa,
                                            fecha: new Date(Date.now()).toISOString()
                                        })
                                            .then(result => res.status(200).send({ message: "Postulacion creada.", result }))
                                            .catch(error => res.status(400).send({ message: "Error al intentar crear la postulación.", error }))
                                    })
                                    .catch(error => res.status(400).send({ message: "Error al intentar buscar al donante.", error }))
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
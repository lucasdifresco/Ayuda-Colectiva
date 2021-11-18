const db = require('../models');
var bcrypt = require('bcryptjs');
const emailCTLR = require('../controllers/email');
const posulaciones = db.postulaciones;
const iniciativas = db.iniciativas;
const donantes = db.donantes;
const usuarios = db.usuarios;

const ROL_ORGANIZACION = 2;
const ROL_DONANTE = 3;

module.exports = {
    async crear(req, res) {
        var parametros = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            iniciativa: req.body.iniciativa,
        }

        var iniciativa = await iniciativas.findOne({ where: { id: parametros.iniciativa } })
            .then(iniciativa => {
                if (iniciativa !== null) { return iniciativa; }
                else { res.status(400).send({ message: "Iniciativa no encontrada." }) }
            }).catch(error => res.status(400).send({ message: "Error al intentar buscar la iniciativa.", error }))

        var organizacion = await usuarios.findOne({ where: { id: iniciativa.organizacion, rol: ROL_ORGANIZACION } })
            .then(organizacion => { if (organizacion !== null) { return organizacion } else { res.status(400).send({ message: "La organización no existe." }); } })
            .catch(error => res.status(400).send({ message: "Error al intentar buscar la organización.", error }))

        var usuario = await usuarios.findOne({ where: { email: parametros.email } })
            .then(usuario => {
                if (usuario !== null)
                {
                    var esValido = donantes.findOne({ where: { id: usuario.id } })
                        .then(donante => {
                            if (donante.validacion) { return true; }
                            else { return false; }
                        }).catch(error => res.status(400).send({ message: "Error al intentar buscar el donante.", error }))
                    if (esValido) { return usuario;}
                    else { res.status(400).send({ message: "El usuario no esta validado para suscribirse." }) }
                }
                else{
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
                        .then(donante => {
                            console.log(donante);
                            return usuarios
                                .create({
                                    email: nuevoDonante.email,
                                    password: bcrypt.hashSync(nuevoDonante.password, 8),
                                    rol: ROL_DONANTE,
                                    id: donante.id,
                                })
                                .catch(error => res.status(400).send({ message: 'Ocurrio un error al intentar crear el usuario.', error }))
                        })
                        .catch(error => res.status(400).send({ message: 'Ocurrio un error al intentar crear el donante.', error }))
                }
            }).catch(error => res.status(400).send({ message: "Error al intentar buscar el usuario.", error }))    
        
        if (iniciativa === null) { res.status(400).send({ message: "Iniciativa inexistente." }) }
        if (organizacion === null) { res.status(400).send({ message: "Organización inexistente." }) }
        if (usuario === null) { res.status(400).send({ message: "Usuario inexistente." }) }

        return await posulaciones.findOne({ where: { donante: usuario.id, iniciativa: parametros.iniciativa } })
            .then(postulacion => {
                if (postulacion !== null) { res.status(400).send({ message: "La postulación ya existe" }); }
                else {
                    posulaciones.create({
                        donante: usuario.id,
                        iniciativa: parametros.iniciativa,
                        fecha: new Date(Date.now()).toISOString()
                    })
                        .then(result => {
                            var mailUsuario = {
                                body: {
                                    destino: usuario.email,
                                    sujeto: "Ayuda Colectiva - Nueva inscripción",
                                    contenido: "Te has subscripto para ayudar en la iniciativa: " + iniciativa.titulo + ".",
                                }
                            }
                            emailCTLR.enviarMail(mailUsuario);
                            var mailOrganizacion = {
                                body: {
                                    destino: organizacion.email,
                                    sujeto: "Ayuda Colectiva - Nueva inscripción",
                                    contenido: "El donante " + usuario.email + " se ha subscripto para ayudar en la iniciativa: " + iniciativa.titulo + ".",
                                }
                            }
                            emailCTLR.enviarMail(mailOrganizacion);

                            res.status(200).send({ message: "Postulacion creada.", result })
                        }).catch(error => res.status(400).send({ message: "Error al intentar crear la postulación.", error }))          
                }
            }).catch(error => res.status(400).send({ message: "Error al intentar buscar la postulación.", error }))
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
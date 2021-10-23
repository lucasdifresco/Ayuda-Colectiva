const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../models');
const users = db.users;
const patients = db.patients;
const PACIENTE = 3; // Role id del paciente
const service = require('../services/index.service');
const email = require('./email');

const hashPasswordAsync = async password => {
	const hash = await bcrypt.hash(password);
	return hash;
}

module.exports = {
    create(req, res)
    {
        return users
            .create({
                role_id: req.body.role_id,
                email: req.body.email,
                password: req.body.password,
                status: req.body.status
            })
            .then(users => {
                email.enviarMail(users.email);  
                if(users.role_id == PACIENTE) {
                    return patients
                        .create({
                            user_id: users.id,
                            dni: req.body.dni
                        })
                        .then(patient => res.status(200).send(patient))
                        .catch(error => res.status(400).send(error));
                } else { return res.status(200).send({ token: service.createToken(users) });  }
            })
            .catch( error => res.status(400).send({message: 'Error al crear el usuario: ${err}'}))
    },
    update (req, res) {
        return users
            .findOne({ where: { id: req.body.user_id } })
            .then(user => { 
                delete req.body.user_id;
                user
                    .update(req.body)
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    disable (req, res) {
        return users
            .findOne({ where: { id: req.body.user_id } })
            .then(user => { 
                user
                    .update({ status: 0 })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
    list (_, res) {
        return users
            .findAll({})
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return users
            .findAll({ where: { email: req.params.email } })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
    listByRole (req, res) {
        return users
            .findAll({ where: { role_id: req.params.role, } })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },
    login (req, res) {
        return users
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then(user => {
                if(user.role_id == PACIENTE){
                    patients.findOne({
                        where: {
                            user_id: user.id
                        }
                    })
                    .then(patient => {
                        let token = service.createToken(user, patient.id);
                        let response = {
                            token: token,
                            user: {
                                user_id: user.id,
                                patient_id: patient.id,
                                email: user.email,
                                role_id: user.role_id
                            }
                        }
                        return res.status(200).send(response);
                    })
                    .catch(error => res.status(400).send(error));
                } else {
                    let token = service.createToken(user, null);
                    let response = {
                        token: token,
                        user: {
                            user_id: user.id,
                            patient_id: null,
                            email: user.email,
                            role_id: user.role_id
                        }
                    }
                    return res.status(200).send(response);
                }
            })
            .catch(error => res.status(400).send(error))
    },
}
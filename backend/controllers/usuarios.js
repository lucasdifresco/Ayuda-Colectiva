const bcrypt = require('bcrypt');
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
    crear(req, res)
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
    modificar (req, res) {
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
    autenticar (req, res) {
        return users
            .findOne({ where: { id: req.body.user_id } })
            .then(user => { 
                user
                    .update({ status: 0 })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    }
}
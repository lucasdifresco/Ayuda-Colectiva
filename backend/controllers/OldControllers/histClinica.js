/*
const Sequelize = require('sequelize');
const db = require('../models/OldModels');
const antecedentes = db.hist_clinica_antecedentes;
const antecedentesFamiliares = db.hist_clinica_antecedentes_familiares;
const patologias = db.hist_clinica_patologias;
const consultas = db.hist_clinica_consultas;
const info = db.hist_clinica_info;
const enfermedades = db.hist_clinica_enfermedades;

module.exports = {

    createAntecedentes (req, res) {
        return antecedentes
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                type: req.body.type,
                is_patient: req.body.is_patient,
                is_father: req.body.is_father,
                is_mother: req.body.is_mother,
                is_siblings: req.body.is_siblings
            })
            .then(antecedentes => res.status(200).send(antecedentes))
            .catch(error => res.status(400).send(error))
    },

    createAntecedentesFamiliares (req, res) {
        return antecedentesFamiliares
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                comments: req.body.comments
            })
            .then(antecedentesFamiliares => res.status(200).send(antecedentesFamiliares))
            .catch(error => res.status(400).send(error))
    },

    createPatologias (req, res) {
        return patologias
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                type: req.body.type,
                comments: req.body.comments
            })
            .then(patologias => res.status(200).send(patologias))
            .catch(error => res.status(400).send(error))
    },

    createConsultas (req, res) {
        return consultas
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                comments: req.body.comments
            })
            .then(consultas => res.status(200).send(consultas))
            .catch(error => res.status(400).send(error))
    },

    createEnfermedades (req, res) {
        return enfermedades
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                comments: req.body.comments
            })
            .then(enfermedades => res.status(200).send(enfermedades))
            .catch(error => res.status(400).send(error))
    },

    createInfo (req, res) {
        return info
            .create({
                patient_id: req.body.patient_id,
                doctor_id: req.body.doctor_id,
                exercise_frequency: req.body.exercise_frequency,
                drinking_frequency: req.body.drinking_frequency,
                smoking_frequency: req.body.smoking_frequency,
                pregnancies: req.body.pregnancies,
                diet: req.body.diet
            })
            .then(info => res.status(200).send(info))
            .catch(error => res.status(400).send(error))
    },


    updateAntecedentes (req, res) {
        
        return antecedentes
            .findOne({
                id: req.body.antecedente_id
            })
            .then( antecedente => {
                delete req.body.antecedente_id;

                antecedente
                    .update(req.body)
                    .then(antecedentes => res.status(200).send(antecedentes))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },

    updateAntecedentesFamiliares (req, res) {
        
        return antecedentesFamiliares
            .findOne({
                id: req.body.antecedenteFamiliar_id
            })
            .then( antecedente => {

                antecedente
                    .update({
                        comments: req.body.comments
                    })
                    .then(antecedentes => res.status(200).send(antecedentes))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },

    updateEnfermedades (req, res) {
        
        return enfermedades
            .findOne({
                id: req.body.enfermedad_id
            })
            .then( enfermedades => {

                enfermedades
                    .update({
                        comments: req.body.comments
                    })
                    .then(enfermedades => res.status(200).send(enfermedades))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },

    updatePatologias (req, res) {
        
        return patologias
            .findOne({
                id: req.body.patologia_id
            })
            .then( patologia => {

                patologia
                    .update({
                        comments: req.body.comments
                    })
                    .then(patologia => res.status(200).send(patologia))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },

    updateConsulta (req, res) {
        
        return consultas
            .findOne({
                id: req.body.consulta_id
            })
            .then( consulta => {

                consulta
                    .update({
                        comments: req.body.comments
                    })
                    .then(consultas => res.status(200).send(consultas))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },

    updateInfo (req, res) {
        
        return info
            .findOne({
                id: req.body.info_id
            })
            .then( info => {
                delete req.body.info_id;

                info
                    .update(body.req)
                    .then(info => res.status(200).send(info))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error));
    },


    getHistClinica (req, res) {
        // Buscamos la disponibilidad deseada
        const getAntecedentes = antecedentes.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

        const getPatologias = patologias.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

        const getConsultas = consultas.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

        const getInfo = info.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

        const getAntecedentesFamiliares = antecedentesFamiliares.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

        const getEnfermedades = enfermedades.findAll({
            where: {
                patient_id: req.params.patient
            }
        });

       return  Promise
            .all([getInfo, getConsultas, getAntecedentes, getPatologias, getAntecedentesFamiliares, getEnfermedades])
            .then(result => {
                let histClinica = {
                    info: result[0],
                    consultas: result[1],
                    antecedentes: result[2],
                    patologias: result[3],
                    antecedentes_familiares: result[4],
                    enfermedades: result[5]
                }

                return res.status(200).send(histClinica);
            })
            .catch(error => res.status(400).send(error));
    },

}
*/
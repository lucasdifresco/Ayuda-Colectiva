const {Op, HasOne, HasMany} = require('sequelize');
const db = require('../models');
const availability = db.availability;
const users = db.users;
const patients = db.patients;

module.exports = {

    /**
     * Availability Appointment
     */
    create (req, res) {
        // Buscamos la disponibilidad deseada
        const disponibilidad = availability.findOne({
            where: {
                doctor_id: req.body.doctor_id,
                date: req.body.date,
                time: req.body.time
            }
        });

       return  Promise
            .all([disponibilidad])
            .then(result => {
                let turno = result[0];
                
                if(turno === null) {
                    // Chequeamos si la disponibilidad existe (si el medico trabaja en ese horario).
                    return res.status(201).send({message: "No existe esta disponibilidad"});

                } else if(turno.patient_id !== null) {
                    // Chequeamos si el turno ya esta ocupado.
                    return res.status(201).send({message: "Turno OCUPADO"});

                } else {
                    // Grabamos el turno con el id del paciente.
                    turno.update({
                        patient_id: req.body.patient_id
                    
                    })
                    .then(turno => res.status(200).send(turno))
                    .catch(error => res.status(400).send(error));
                }
                
            })
            .catch(error => res.status(400).send(error));
    },

    delete (req, res) {
        return availability
            .findOne({
                where: {
                    doctor_id: req.body.doctor_id,
                    patient_id: req.body.patient_id,
                    date: req.body.date,
                    time: req.body.time
                }
            })
            .then(availability => {
                return availability
                    .update({
                        patient_id: null
                    })
                    .then(turnoCancelado => res.status(200).send(turnoCancelado))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find an Appointment by Doctor
     */
    findByDoctor (req, res) {
        return availability
            .findAll({
                where: {
                    doctor_id: req.params.doctor,
                    patient_id: {
                        [Op.ne]: null
                    }
                },
                include: [{
                    model: patients,
                    as: "patients"
                },
                {
                    model: users,
                    as: "doctors",
                    attributes: [
                        'nombre', 'apellido'
                    ]
                }]
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find an Appointment by Patient
     */
    findByPatient (req, res) {
        return availability
            .findAll({
                where: {
                    patient_id: req.params.patient,
                },
                include: [{
                    model: patients,
                    as: 'patients'
                },
                {
                    model: users,
                    as: "doctors",
                    attributes: [
                        'nombre', 'apellido'
                    ]
                }]
            })
            .then(availability => res.status(200).send(availability))
            .catch(error =>
                {console.log( error )})//res.status(400).send(error))
    },

    /**
     * Check if appoitment exists
     */
    appointmentExists (req, res) {
        return availability
            .findAll({
                where: {
                    doctor_id: req.params.doctor,
                    date: req.params.date,
                    time: req.params.time
                }
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    list (_, res) {
        return availability
            .findAll({
                where: {
                    patient_id: {
                        [Op.ne]: null
                    }
                },
                include: [{
                    model: patients,
                    as: "patients"
                },
                {
                    model: users,
                    as: "doctors",
                    attributes: [
                        'nombre', 'apellido'
                    ]
                }]
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    }
}
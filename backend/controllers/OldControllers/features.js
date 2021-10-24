/*
const Sequelize = require('sequelize');
const db = require('../models/OldModels');
const features = db.features;

module.exports = {


    create (req, res) {
        return features
            .create({
                name: req.body.name
            })
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },

                
    list (_, res) {
        return features
            .findAll({})
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },


    find (req, res) {
        return features
            .findAll({
                where: {
                    name: req.params.name,
                }
            })
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },
}
*/
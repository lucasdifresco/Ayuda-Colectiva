const Sequelize = require('sequelize');
const db = require('../models');
const features = db.features;

module.exports = {

    /**
     * Features Create
     */
    create (req, res) {
        return features
            .create({
                name: req.body.name
            })
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Feature
     */                  
    list (_, res) {
        return features
            .findAll({})
            .then(features => res.status(200).send(features))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Feature
     */
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
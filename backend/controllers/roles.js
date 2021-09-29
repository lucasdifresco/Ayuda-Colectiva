const Sequelize = require('sequelize');
const db = require('../models');
const roles = db.roles;
const permissions = db.permissions;

module.exports = {

    /**
     * Roles Create
     */
    create (req, res) {
        return roles
            .create({
                name: req.body.name
            })
            .then(role => {
                var permissionsReq = JSON.parse(req.body.permissions);
                let permissionsArr = [];
                for(let i=0; i < permissionsReq.length; i++) {
                    permissionsReq[i].role_id = role.id;
                    permissionsArr.push(permissionsReq[i]);
                }

                return permissions
                    .bulkCreate(permissionsArr)
                    .then(permissions => res.status(200).send(permissions))
                    .catch(error => res.status(400).send(error)) 
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * Roles Update
     */
    update (req, res) {
        return roles
            .findOne({
                where: {
                    id: req.body.role_id
                }
            })
            .then(role => { 
                return role
                    .update({
                        name: req.body.name
                    })
                    .then(role => res.status(200).send(role))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Roles
     */                  
    list (_, res) {
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Roles
     */
    find (req, res) {
        return roles
            .findAll({
                where: {
                    name: req.params.name,
                }
            })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },
}
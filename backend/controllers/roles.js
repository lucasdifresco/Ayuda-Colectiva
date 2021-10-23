const db = require('../models');
const roles = db.roles;
const permissions = db.permissions;

module.exports = {
    create (req, res) {
        return roles
            .create({ id: req.body.id })
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
    update (req, res) {
        return roles
            .findOne({ where: { id: req.body.id } })
            .then(role => { 
                return role
                    .update({ tipo: req.body.tipo })
                    .then(role => res.status(200).send(role))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },                
    list (_, res) {
        return roles
            .findAll({})
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return roles
            .findAll({ where: { id: req.params.id } })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    },
}
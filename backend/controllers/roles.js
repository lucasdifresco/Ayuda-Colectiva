const db = require('../models');
const roles = db.roles;

module.exports = {
    ver (req, res) {
        return roles
            .findAll({ where: { id: req.params.id } })
            .then(roles => res.status(200).send(roles))
            .catch(error => res.status(400).send(error))
    }
}
/**
 * @type {Module jsonwebtoken|Module jsonwebtoken}
 * @author | Mohammad Raheem
 */
var jwt = require('jsonwebtoken');
var config = require('../config').config();

var authorization = function (req, res, next) {

    var token = req.headers['x-access-token'];

    var msg = {auth: false, message: 'No token provided.'};
    if (!token)
        res.status(500).send(msg);

    let sec = process.env.ACCESS_TOKEN_SECRET;

    jwt.verify(token, sec, function (err, decoded) {
        var msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err)
            res.status(500).send(msg);

        var dec = jwt.decode(token, {complete: true});

        req.userId = dec.payload.user_id;
        next();
    });
}

module.exports = authorization;


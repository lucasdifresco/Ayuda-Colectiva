var jwt = require('jsonwebtoken');

var authorization = function (req, res, next) {

    var token = req.headers['x-access-token'];
    if (!token) { res.status(500).send({ auth: false, message: 'No token provided.' }); }

    let sec = process.env.ACCESS_TOKEN_SECRET;

    jwt.verify(token, sec, function (err, decoded) {
        if (err) { res.status(500).send({ auth: false, message: 'Failed to authenticate token.' }); }
        var dec = jwt.decode(token, {complete: true});
        req.id = dec.payload.user_id;
        next();
    });
}

module.exports = authorization;


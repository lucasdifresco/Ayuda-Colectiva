'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
const ACCESS_TOKEN_SECRET ="0807a101f4ed349c5a5c0bcde06e4feb3f12f4b47de7c007adc129435c9742291f9c38add730813fe5aa0054dddf2fb94046fd55a3c226b7eb4445cf5898b614";
const REFRESH_TOKEN_SECRET ="10017ccc70ebf77fd3fbf8a181a87e650451ab7f911c4002e2897940214805d30695f95dab9ddd4e677426522fc41f1074191812493c0730293e974dd8d91cbf";

const db = require('../models');
const users = db.users;

module.exports = {

 createToken(user, patientId) {
    const payload = {
        user_id: user.id,
        role_id: user.role_id,
        email: user.email,
        patient_id: patientId,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    }

    return jwt.encode(payload, ACCESS_TOKEN_SECRET);
},

 decodeToken(token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const playload = jwt.decode(token, ACCES_TOKEN_SECRET);

            var exp = playload.exp;
            var unix = moment().unix();

            if (exp< unix) {
                resolve({
                    status:401,
                    message: 'El token a expirado'
                })
            }        

            resolve(playload.sub);
        }

        catch (err) {
            reject({
                status:401,
                message: 'Invalid'
            })
        }
    });

    return decode;
}

}
// module.exports = createToken;
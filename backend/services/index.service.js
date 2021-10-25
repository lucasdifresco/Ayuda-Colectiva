'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const ACCESS_TOKEN_SECRET ="0807a101f4ed349c5a5c0bcde06e4feb3f12f4b47de7c007adc129435c9742291f9c38add730813fe5aa0054dddf2fb94046fd55a3c226b7eb4445cf5898b614";

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
                if (exp < unix) { resolve({ status: 401, message: 'El token a expirado' }) }
                resolve(playload.sub);
            }
            catch (err) { reject({ status: 401, message: 'Invalid' }) }
        });
        return decode;
    }
}
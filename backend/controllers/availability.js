const {Op} = require('sequelize');
const db = require('../models');
const availability = db.availability;

module.exports = {

    /**
     * Availability Create
     */
    create (req, res) {
        // Capturo datos del request
        let dateFrom = req.body.dateFrom;
        let dateTo = req.body.dateTo;
        let scheduleTemp = JSON.parse(req.body.schedule);
        let doc = req.body.doctor;
        let freq = req.body.frequency;
        
        // Genero array de horarios por dia de semana
        let schedule = [];
        for(var i = 0; i < scheduleTemp.length; i++){
            let startArr = scheduleTemp[i].start.split(':');
            let startHour = startArr[0];
            let startMin  = startArr[1];

            let endArr = scheduleTemp[i].end.split(':');
            let endHour = endArr[0];
            let endMin  = endArr[1];
            schedule[scheduleTemp[i].day] = {
                startHour: startHour,
                startMin: startMin,
                endHour: endHour,
                endMin: endMin
            }
        }
        
        // Recorro el rango de fechas y genero su correspondiente objeto de dispoibilidad horaria.
        var getDaysArray = function(doc, freq, start, end) {
            var arr = [];
            var endDate = new Date(end);
            for(dt=new Date(start); dt<=endDate; dt.setDate(dt.getDate()+1)){
                var obj = {};
                if(typeof schedule[dt.getDay()] !== 'undefined')
                {
                    let weekday = dt.getDay();
                    start = new Date(dt);
                    start.setHours(schedule[weekday].startHour)
                    start.setMinutes(schedule[weekday].startMin);
                    end = new Date(dt);
                    end.setHours(schedule[weekday].endHour)
                    end.setMinutes(schedule[weekday].endMin);

                    for(let d = new Date(start); d.getTime() <= end.getTime(); d.setTime(d.getTime() + freq*60000)) {
                        console.log(d.getMinutes());
                        console.log(end);
                        obj = {
                            doctor_id: doc,
                            date: dt.getFullYear() + "-" + ((dt.getMonth()+1) > 9? (dt.getMonth()+1) : "0" + (dt.getMonth()+1)) 
                                + "-" + (dt.getDate() > 9? dt.getDate() : "0" + dt.getDate()),
                            weekday: weekday,
                            time: d.getHours() + ":" + (d.getMinutes() === 0 ? "0" + d.getMinutes() : d.getMinutes()),
                        };
                        arr.push(obj);
                    }
                }
                dt = new Date(dt);
            }
            return arr;
        };
        let dates = getDaysArray(doc, freq, dateFrom, dateTo);

        return availability
            .bulkCreate(dates)
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * List of Availabilities
     */
    list (_, res) {
        return availability
            .findAll({where: {
                patient_id: {
                    [Op.eq]: null
                }
            }})
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find a Availabilities
     */
    find (req, res) {
        return availability
            .findAll({
                where: {
                    doctor_id: req.params.doctor,
                }
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },

    /**
     * Find availability by doc and date
     */
    findByDate (req, res) {
        return availability
            .findAll({
                where: {
                    doctor_id: req.params.doctor,
                    date: req.params.date
                }
            })
            .then(availability => res.status(200).send(availability))
            .catch(error => res.status(400).send(error))
    },
}
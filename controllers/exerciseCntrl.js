
const db = require("../models")

const ExerciseCntrl = {
 
  getAll(req, res) {

    db.Exercise.findAll({}).then(function (results) {
      res.json(results);
    });
  
  },
};

module.exports = ExerciseCntrl;

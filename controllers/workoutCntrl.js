// This is an example of a Controller. Note how it requires in the model(s) it needs.

// const Exercise = require("../models/exerciseModel.js");
const db = require("../models")

const WorkoutCntrl = {
 
  getAll(req, res) {
    db.Workout.findAll({}).then(function (results) {
      res.json(results);
    });
  },

  create(req, res){
    db.Workout.create(req.body).then(function(results){
      res.json(results);
    })
  }
};

module.exports = WorkoutCntrl;

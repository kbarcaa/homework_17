// This is an example of a Controller. Note how it requires in the model(s) it needs.

// const Exercise = require("../models/exerciseModel.js");
const db = require("../models")

const ActivityCntrl = {
  // This is called (when needed) from the route page when a
  // listing of all exercises is needed
  getAll(req, res) {

    db.Activity.findAll({}).then(function (results) {
      res.json(results);
    });
    
  },
  
  create(req, res){
    db.Activity.create(
      {
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance,
      }
    ).then(function(results){
      res.json(results)
    })
  }
};

// -- WE ARE EXPORTING (MAKING AVAILABLE TO OTHER FILES) THE CONTROLLER LOGIC (OBJECT & METHODS) -- //
module.exports = ActivityCntrl;

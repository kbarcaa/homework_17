// // -- WORKOUT MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    name: DataTypes.STRING,
    workoutId: DataTypes.STRING,
      
  });

  Workout.associate = function(models) {
    Workout.hasMany(models.Activity, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Workout;
};

module.exports = function (sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });


  Workout.associate = function(models) {
    
    Workout.hasMany(models.Activity, {
      onDelete: "cascade"
    });
  };



  return Workout;
};

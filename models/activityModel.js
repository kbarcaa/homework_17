// // -- ACTIVITY MODEL DEFINITION -- //

module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define("Activity", {
    duration: DataTypes.STRING,
    weight: DataTypes.STRING,
    reps: DataTypes.STRING,
    sets: DataTypes.STRING,
    distance: DataTypes.STRING,
  });

  Activity.associate = function(models) {
    // hasOne or belongsTo
    Activity.belongsTo(models.Workout,{
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activity;
};

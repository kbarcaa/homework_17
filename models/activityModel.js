module.exports = function (sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Activity.associate = function(models) {
  
    // has one or belongsTo
    Activity.hasOne(models.Exercise, {
      onDelete: "cascade"
    });
  };


  return Activity;
};

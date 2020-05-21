// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    // exercise_type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   }
    // },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    }
  });

  // Exercise.associate = function(models) {
  //   
  //   Exercise.belongsTo(models.Workout, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  
  return Exercise;
};



// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
// module.exports = function (sequelize, DataTypes) {
//   // -- DEFINE SEQUELIZE MODEL -- //


//   // -- DONT FORGET TO RETURN YOUR MODEL (NEW OBJECT) -- //
//   return // (???);
// };

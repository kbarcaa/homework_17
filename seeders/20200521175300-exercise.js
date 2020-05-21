'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Exercises', 
   [
    { exercise_name: "running", createdAt : new Date(), updatedAt : new Date() },
    { exercise_name: "weight lifting", createdAt : new Date(), updatedAt : new Date() },
    { exercise_name: "swimming", createdAt : new Date(), updatedAt : new Date() }

  ], 
  {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('Exercises', null, {});
  }
};

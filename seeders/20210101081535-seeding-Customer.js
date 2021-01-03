'use strict';

const data = [
  {
    identityNumber: 1234567,
    fullName: "Zukuz wow",
    address: "Gading raya",
    birthDate: new Date(),
    gender: "male"
  },
  {
    identityNumber: 1234567,
    fullName: "Fee Madam man",
    address: "Depok",
    birthDate: new Date(),
    gender: "male"
  },
  {
    identityNumber: 1234567,
    fullName: "tailan",
    address: "Thailand",
    birthDate: new Date(),
    gender: "female"
  }
]

data.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

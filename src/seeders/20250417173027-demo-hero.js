'use strict';
const getApiData = require("./../data/getOverwatchHeroes.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('heroes', await getApiData(), {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('heroes', null, {});
  }
};

'use strict';
const getPlayerSeed = require("./../data/getPlayerSeed.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('players', getPlayerSeed(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('players', null, {});
  }
};

'use strict';
const getFavoriteSeed = require("./../data/getFavoriteSeed.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorites', getFavoriteSeed(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorites', null, {});
  }
};

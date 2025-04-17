'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('heroes', 'heroName', 'name');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('heroes', 'name', 'heroName');
  }
};

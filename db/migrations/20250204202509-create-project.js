'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      isFeatured: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull:false
      },
      shortDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      productUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references:{
          model:'user',
          key:'id'
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project');
  }
};
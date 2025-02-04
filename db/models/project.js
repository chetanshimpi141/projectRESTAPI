const { DataTypes } = require("sequelize")
const sequelize = require("../../config/database")

module.exports = sequelize.define('project',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING,
    allowNull:false
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    allowNull:false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull:false
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  productUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ARRAY(Sequelize.STRING)
  },
  tags: {
    type: DataTypes.ARRAY(Sequelize.STRING)
  },
  createdBy: {
    type: DataTypes.INTEGER,
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
})
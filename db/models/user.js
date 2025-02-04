'use strict';

const {Model,Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../../config/database')
const bcrypt = require ('bcrypt');
const AppError = require('../../utils/appError');

module.exports = sequelize.define('user',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        userType: {
          type: DataTypes.ENUM('0','1','2'),
          allowNull:false,
          validate:{
            notNull:{
              msg:'userType can not be null'
            },          
            notEmpty:{
              msg:'userType cannot be empty'
            },
          },
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull:false,
          validate:{
            notNull:{
              msg:'firstName can not be null'
            },            
            notEmpty:{
              msg:'firstName cannot be empty'
            },
          },
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull:false,
          validate:{
            notNull:{
              msg:'lastName can not be null'
            },            
            notEmpty:{
              msg:'lastName cannot be empty'
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull:false,
          validate:{
            notNull:{
              msg:'email can not be null'
            },            
            notEmpty:{
              msg:'email cannot be empty'
            },
            isEmail:{
              msg:'Invalid email id'
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false,
          validate:{
            notNull:{
              msg:'password can not be null'
            },
            notEmpty:{
              msg:'password cannot be empty'
            },
            //len:[2,10]
          },
        },
        confirmPassword:{
          type:DataTypes.VIRTUAL,
          set(value){
            if(value === this.password){
              const hashPassword = bcrypt.hashSync(value,10) 
              this.setDataValue('password',hashPassword)
            }else{
              throw new AppError('Password and confirm, password must be the same',400)
            }
          },
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        deletedAt:{
          type:DataTypes.DATE
        }
},{
  paranoid:true,
  freezeTableName:true,
  modelName:'user',
})

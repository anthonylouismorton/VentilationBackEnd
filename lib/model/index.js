'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const equipmentModel = require('./equipment');
const ventModel = require('./vent');
const ventSurveyModel = require('./ventSurvey');
const technicianModel = require('./technician');
require('dotenv').config();
let DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' 
? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
} : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
const equipmentTable = equipmentModel(sequelizeInstance, DataTypes);
const ventTable = ventModel(sequelizeInstance, DataTypes);
const ventSurveyTable = ventSurveyModel(sequelizeInstance, DataTypes);
const technicianTable = technicianModel(sequelizeInstance, DataTypes);


module.exports = {
  db: sequelizeInstance,
  equipment: equipmentTable,
  vent: ventTable,
  ventSurvey: ventSurveyTable,
  technician: technicianTable
}
'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const equipmentTable = require('./equipment');
const ventTable = require('./vent');
const ventSurveyTable = require('./ventSurvey');
const technicianTable = require('./technician');
const unitTable = require('./unit')
require('dotenv').config();
let DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
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
const Equipment = equipmentTable(sequelizeInstance, DataTypes);
const Technician = technicianTable(sequelizeInstance, DataTypes);
const Unit = unitTable(sequelizeInstance, DataTypes);
const Vent = ventTable(sequelizeInstance, DataTypes);
const VentSurvey = ventSurveyTable(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  Equipment,
  Vent,
  VentSurvey,
  Technician,
  Unit
}
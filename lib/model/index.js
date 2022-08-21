'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const equipmentTable = require('./equipment');
const ventTable = require('./vent');
const ventSurveyTable = require('./ventSurvey');
const technicianTable = require('./technician');
const unitTable = require('./unit')
const calibrationTable = require('./calibration')
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
const Calibration = calibrationTable(sequelizeInstance, DataTypes);

Vent.hasMany(VentSurvey, {
  as: 'vent'
});
Technician.hasMany(VentSurvey, {
  as: 'ventSurvey'
});
Equipment.hasMany(VentSurvey, {
  foreignKey: 'equipmentId'
});
Unit.hasMany(Vent, {
  as: 'vent'
});
Equipment.hasMany(Calibration, {
  foreignKey: 'equipmentId' 
})
VentSurvey.belongsTo(Technician,{
  foreignKey: 'technicianId',
  as: 'technician'
})
VentSurvey.belongsTo(Vent,{
  foreignKey: 'ventId',
  as: 'vent'
})
Vent.belongsTo(Unit,{
  foreignKey: 'unitId',
  as: 'unit'
} )

module.exports = {
  db: sequelizeInstance,
  Equipment,
  Vent,
  VentSurvey,
  Technician,
  Unit,
  Calibration
}
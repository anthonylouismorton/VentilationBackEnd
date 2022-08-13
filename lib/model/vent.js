'use strict'
const Technician = require('./technician');

const Vent = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'vent',{
      ventId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      unitId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      serialNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      SurveyFrequency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      VentShape: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })

module.exports = Vent
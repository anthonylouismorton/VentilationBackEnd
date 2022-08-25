'use strict'
const VentMeasurement = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'ventMeasurement',{
      ventMeasurementId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ventMeasurement: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      underscore: false, timestamps: false
    })

module.exports = VentMeasurement
'use strict'
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
      surveyFrequency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      roomHeight: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      roomWidth: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      roomLength: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ventDimension1: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ventDimension2: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ventShape: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      underscore: false, timestamps: false
    })

module.exports = Vent
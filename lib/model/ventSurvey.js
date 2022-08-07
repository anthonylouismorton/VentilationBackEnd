'use strict'

const VentSurvey = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'ventSurvey',{
      ventSurveyId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ventId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      unitId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      surveyDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      roomDimensions: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ventReadings: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ventDimensions: {
        type: DataTypes.STRING,
        allowNull: true
      },
      technicianId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      equipmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })

module.exports = VentSurvey
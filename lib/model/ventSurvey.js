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
      companyID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      surveyDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.DATE,
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
'use strict'

const VentSurvey = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'ventSurvey',{
      ventSurveyId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      surveyDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      dueByDate: {
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
      airChanges: {
        type: DataTypes.STRING,
        allowNull: true
      },
      secondaryReadings: {
        type: DataTypes.STRING,
        allowNull: true
      },
      preCal: {
        type: DataTypes.STRING,
        allowNull: true
      },
      PostCal:{
        type: DataTypes.STRING,
        allowNull: true
      }

    })

module.exports = VentSurvey
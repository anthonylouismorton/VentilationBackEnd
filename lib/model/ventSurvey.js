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
      }
    })

module.exports = VentSurvey
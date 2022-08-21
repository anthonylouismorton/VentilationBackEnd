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
        allowNull: true
      },
      expirationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
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
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
      postCal:{
        type: DataTypes.STRING,
        allowNull: true
      },
      pass:{
        type: DataTypes.STRING,
        allowNull: true
      },
      completedBy:{
        type: DataTypes.STRING,
        allowNull: true
      },
      status:{
        type: DataTypes.STRING,
        defaultValue: 'In Progress',
        allowNull: true
      }
    },
    {
      underscore: false, timestamps: false
    })

module.exports = VentSurvey
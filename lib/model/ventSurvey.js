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
      },
      coverageDate:{
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      underscore: false, timestamps: false
    })

module.exports = VentSurvey
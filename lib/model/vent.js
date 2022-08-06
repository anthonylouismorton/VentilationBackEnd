'use strict'

const Vent = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'vent',{
      ventId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      companyID: {
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
      installDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      decommisionDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      technicianID: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      SurveyFrequency: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })

module.exports = Vent
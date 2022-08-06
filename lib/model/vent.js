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
      installDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      decommisionDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      technicianId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      SurveyFrequency: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })

Vent.hasOne(Technician, {
  foreignKey: 'technicianId',
  sourceKey: 'technicianId'
})

module.exports = Vent
'use strict'

const Equipment = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'equipment',{
      equipmentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
      calibrationDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      calibrationExpiration: {
        type: DataTypes.DATE,
        allowNull: true
      }
    })

module.exports = Equipment
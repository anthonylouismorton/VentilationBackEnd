'use strict'

const Unit = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'unit',{
      unitId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      WPID: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unitName: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })

module.exports = Unit
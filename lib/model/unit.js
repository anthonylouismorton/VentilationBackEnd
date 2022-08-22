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
      },
      poc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      altPoc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      altEmail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      altPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      underscore: false, timestamps: false
    })

module.exports = Unit
'use strict'

const Calibration = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'calibration',{
      calibrationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
       calibrationLocation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      calibrationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      calibrationExpiration: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    },
    {
      underscore: false, timestamps: false
    }
    );

module.exports = Calibration
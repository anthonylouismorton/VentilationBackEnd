'use strict'

const Technician = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'technician',{
      technicianId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      technicianEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      technicianRole: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })

module.exports = Technician
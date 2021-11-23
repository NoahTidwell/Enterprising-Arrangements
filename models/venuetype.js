
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Venuetype extends Model {}

Venuetype.init(
  {
  //define columns
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    type_name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
           len:[1]
        }
    },
    description: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate:{
          len: [1]
        } 
    },
  },  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'venuetype',
  }
);

module.exports = Venuetype;
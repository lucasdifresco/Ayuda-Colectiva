'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsTo(models.roles, {
        as: 'roles',
        foreignKey: 'role_id'
      })
    }
  };
  users.init({
    role_id: { 
      allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email invalido."
        }
      },
    },
    nombre: {
      allowNull: true,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.CHAR
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
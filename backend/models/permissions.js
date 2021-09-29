'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      permissions.belongsTo(models.roles, {
        as: 'roles',
        foreignKey: 'role_id'
      });
      permissions.belongsTo(models.features, {
        as: 'features',
        foreignKey: 'feature_id'
      })
    }
  };
  permissions.init({
    role_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    feature_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    can_create: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    can_read: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    can_update: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    can_delete: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'permissions',
  });
  return permissions;
};
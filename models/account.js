'use strict';
const {
  Model
} = require('sequelize');
const helper = require('../helper/index')
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.Customer)
    }
  };
  Account.init({
    type: DataTypes.STRING,
    balance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 500000
      }
    },
    CustomerId: DataTypes.INTEGER,
    accountNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Account',
    hooks: {
      beforeCreate: (instance, option) => {
        instance.accountNumber = helper()
      }
    }
  });
  return Account;
};
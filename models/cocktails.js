'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('cocktails', {
    name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    picture: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'cocktails',
    underscored: true,
    
  });

  return Model;
};


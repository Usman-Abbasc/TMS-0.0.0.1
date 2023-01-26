const Sequelize = require('sequelize');

const sequelize = new Sequelize('tuts', 'sa', '123', {
  dialect: 'mssql',
  host: '192.168.30.203',
//   operatorsAliases: operatorsAliases,
  logging: false,
  dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true,
    //   instanceName: 'MSSQLSERVER2014'
  }
});

module.exports = sequelize;
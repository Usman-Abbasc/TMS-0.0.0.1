const Sequelize = require('sequelize');
const sequelize = require("../config/dbcon")

  
    const Tutorial = sequelize.define("Tutorial", {
      
      title: {
         type: Sequelize.STRING,
         autoIncrement:false,
         allowNull:false,
         primaryKey:true
      },
      description: {
         type: Sequelize.STRING,
         primaryKey:true

      },
      published: {
         type: Sequelize.BOOLEAN,
         primaryKey:true

      } });  
    
  


  module.exports = Tutorial
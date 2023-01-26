
const sequelize = require("../config/dbcon.js")

const findAll = async (req,res,next)=> {
// DELETE FROM Tutorial WHERE title ='Vuejs'

        
        qq = await sequelize.query(`SELECT * FROM Tutorial; `)
        res.send(qq)
        
    
}
module.exports = {findAll}
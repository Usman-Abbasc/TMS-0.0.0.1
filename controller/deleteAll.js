const sequelize = require("../config/dbcon.js")

const removeAll = async (req,res,next)=> {
// DELETE FROM Tutorial WHERE title ='Vuejs'

        const title = req.body.title;
        qq = await sequelize.query(`DELETE * FROM Tutorial`)
        res.send("Tutorial was deleted successfully")
        
    
}
module.exports = {removeAll}


const sequelize = require("../config/dbcon.js")

const remove = async (req,res,next)=> {
// DELETE FROM Tutorial WHERE title ='Vuejs'

        const title = req.body.title;
        qq = await sequelize.query(`DELETE FROM Tutorial WHERE title='${title}'`)
        res.send("Tutorial was deleted successfully")
        
    
}
module.exports = {remove}


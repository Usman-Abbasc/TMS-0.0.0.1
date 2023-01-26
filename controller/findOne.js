const sequelize = require("../config/dbcon.js")

const findOne = async (req,res,next)=> {

        const title = req.body.title;
        console.log(title);
        qq = await sequelize.query(`SELECT FROM Tutorial WHERE title='${title}';
        `)
        res.send("Tutorial was deleted successfully")
        
    
}
module.exports = {findOne}


const sequelize = require("../config/dbcon.js")

const findAllpublished = async (req,res,next)=> {
    title = req.body.title;
    qq = await sequelize.query(`SELECT * FROM Tutorial WHERE published ='${title}'; `)
        res.send(qq)
}
module.exports = {findAllpublished}
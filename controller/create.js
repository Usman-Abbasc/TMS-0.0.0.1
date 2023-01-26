const sequelize = require("../config/dbcon.js")



const create = async (req,res,next)=> {
    title = req.body.title;
    description = req.body.description;
    published = req.body.published;
    qq = await sequelize.query(`INSERT INTO Tutorial (title, description,published)
    VALUES ('${title}', '${description}','${published}');`)
    res.send("Tutorial record submitted sucessfully")
}
module.exports = {create}
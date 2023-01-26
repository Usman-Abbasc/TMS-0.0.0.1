const sequelize = require("../config/dbcon.js")

const upgrade = async (req,res,next)=> {

        const title = req.body.title;
        const description = req.body.description;
        const published = req.body.published;
        console.log(title);
        qq = await sequelize.query(`UPDATE Tutorial SET title = '${title}', description = '${description}',published='${published}' WHERE title='${title}', description = '${description}',published='${published}';
        `)
        res.send("Tutorial was deleted successfully")
        
    
}
module.exports = {upgrade}

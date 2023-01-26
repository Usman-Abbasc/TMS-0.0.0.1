const express = require("express");
const routes = require("./routes/tuts")
require("dotenv").config()
const sequelize = require("./config/dbcon")
const cors = require("cors");

const app = express()

var corsOptions = {
    origin : "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(express.json());


app.use(express.urlencoded({extended : true}));
app.use('/api',routes);
// const db = require("./models/index");
// db.sequelize.sync();

sequelize
  .authenticate()
// .sync()
  .then(async () => {
  

    // console.log(query);
    console.log("Connection has been established successfully port.", 4000);
    // res.send("Welcome to the Tutorial management system")
    app.listen(4000);
    app.timeout = 5000000;
  })
  .catch((err) =>
    console.log("Error in established a connection>>>>>", 4000, err)
  );



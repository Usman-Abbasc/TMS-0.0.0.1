const express = require("express");
const router = express.Router();

const createcontroller = require("../controller/create")
const deletecontroller = require("../controller/delete")
const deleteAllcontroller = require("../controller/deleteAll")
const findAllcontroller = require("../controller/findAll")
const FindAllpublishedcontroller = require("../controller/FindAllpublished")
const findOnecontroller = require("../controller/findOne")
const updatecontroller = require("../controller/update")

router.get('/',(req,res)=>{
    res.send("Welcome to the Tutorial Management system")

})

//Create tutorial
router.post('/create',createcontroller.create);


//Delete tutorial
router.delete('/remove',deletecontroller.remove);

//Delete All tutorials
router.delete('/removeAll',deleteAllcontroller.removeAll);

// Find All tutorials
router.get('/findAll',findAllcontroller.findAll);

// Find All published tutorials
router.get('/findAllpublished',FindAllpublishedcontroller.findAllpublished);

// Find One tutorial
router.get('/findOne',findOnecontroller.findOne);

// Update tutorial
router.put('/upgrade',updatecontroller.upgrade);


module.exports = router;
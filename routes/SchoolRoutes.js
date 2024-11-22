const express = require("express");
const {addSchool,listSchools} = require("../controllers/schoolController.js")
const router  = express.Router();

router.post("/addSchool",addSchool);
router.get("/listSchools",listSchools);
 
module.exports =router
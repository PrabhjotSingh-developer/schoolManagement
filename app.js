const express = require("express");
const bodyParser = require('body-parser');
const schoolRoutes = require("./routes/SchoolRoutes.js")

require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use("/api",schoolRoutes)
app.listen(PORT,()=>{
    console.log("Server is running on port ")
})
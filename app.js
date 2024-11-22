const express = require("express");
const bodyParser = require('body-parser');
const schoolRoutes = require("./routes/SchoolRoutes.js")

require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use("/api",schoolRoutes)
app.get("/",(req,res)=>{
    res.status(200).send("Hello from school management project")
})
app.listen(PORT,()=>{
    console.log("Server is running on port ")
})
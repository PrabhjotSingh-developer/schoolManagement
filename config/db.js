const mysql = require("mysql2")
require('dotenv').config(); 
const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
}
)
db.connect((err)=>{
    if(err)
    {
         console.log("database connection failed",err.stack)
    }
    else
    {
        console.log("Connected to database");
    }
})
module.exports =db;
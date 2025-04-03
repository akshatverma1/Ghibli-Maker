const express = require ("express");
require('dotenv').config()


const app = express();
const POR = process.env.PORTs;
console.log(POR);



app.listen(POR,()=>{
    console.log("Port is Running on = "+POR);
})

app.get("/",(req,res)=>{
    res.send("Akshat");
})
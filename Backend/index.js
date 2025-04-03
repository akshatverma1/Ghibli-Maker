const express = require ("express");

const app = express();
const PORT = 3009;
app.listen(PORT,()=>{
    console.log("Port is Running on = "+PORT);
})

app.get("/",(req,res)=>{
    res.send("Akshat");
})
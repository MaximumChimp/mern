const express = require("express");
require("dotenv").config();

const app = express();

app.get('/',);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`)
})
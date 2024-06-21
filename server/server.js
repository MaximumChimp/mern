const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const UserModel = require("./model/User");
const app = express();

app.use(express.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB);
// const DB = mongoose.connection;
// DB.on('error',(error)=>console.log(error))

app.get('/getUsers',(req,res)=>{
    UserModel.find()
    .then(users=> res.json(users))
    .catch(err=> res.json(err));
});

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port ${process.env.PORT}`)
})  
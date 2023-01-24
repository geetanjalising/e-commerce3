require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require("mongoose");
require("./db/connection");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//const port = 8005;
const port = process.env.PORT || 8005;

const Products = require("./model/productsSchema");
const DefaultData=require("./defaultdata");
const cors=require("cors");
const router=require("./routes/router");


app.use(express.json());//We export our data in json format
app.use(cookieParser(""));
app.use(cors());
app.use(router);

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
});

DefaultData();
const express=require("express");
const connectDB = require("./config/db"); //db bağlantı fonksiyonlarını import ettik 

require("dotenv").config();//dotenv dosyasını aktive ettik

const app=express();

connectDB();
//uygulama başlarken db balantısı kurar

app.use(express.json()); //json isteklerini okumak için 

app.get("/", (req, res) => {
    res.send("API Running");
});

module.exports = app;

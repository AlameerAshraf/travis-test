var express = require('express');

var app = express();

app.get('/Home' , function (req , res){
    res.send("Hi this is home !");
    res.end();
});

app.listen(4875 ,function () {
    console.log("App is running on port !");
});
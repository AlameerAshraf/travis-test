var express = require('express');

var app = express();

app.get('/Home' , (req , res) => {
    res.send("Hi this is home !");
    res.end();
});

app.listen(4875 ,() => {
    console.log("App is running on port !");
});
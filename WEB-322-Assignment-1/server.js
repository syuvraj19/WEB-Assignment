/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yuvraj singh Student ID:155580210 Date: 16/09/2022
*
*  Online (Cyclic) URL: https://glorious-cow-jumpsuit.cyclic.app/
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Yuvraj Singh ID:155580210");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
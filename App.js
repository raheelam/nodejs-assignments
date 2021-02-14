const bodyParser = require('body-parser');
const express = require('express');

const App = express();

App.use(bodyParser.urlencoded({extended:false}))


App.use("/users",(req, res, next)=>{
    console.log("Hello");
    //next();
    res.send("<h1>Hello</h1>");
    
});

App.use("/",(req, res, next)=>{
    console.log("hIIII");
    res.send("<h1>Hiiiii</h1>");
});



App.listen(4000);
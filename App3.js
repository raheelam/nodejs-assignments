const bodyParser = require('body-parser');
const express = require('express');
const userRoute = require('./routes/user');

const App3 = express();

App3.set("view-engine", "ejs");
App3.set("views", "views");

App3.use(bodyParser.urlencoded({extended:false}))

App3.use(userRoute);


App3.listen(4000);
const bodyParser = require('body-parser');
const { static } = require('express');
const path = require('path');
const express = require('express');
const adminRoutes = require('./routes/admin');

const App2 = express();
App2.use(static(path.join(__dirname, 'public'))); //public is default 

App2.use(bodyParser.urlencoded({extended: false}));

App2.use("/user", adminRoutes);

App2.listen(4000);
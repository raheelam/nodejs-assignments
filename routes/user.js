const express = require('express');
const path = require('path');

const router = express.Router();
const users = [];
router.get('/',(req,res,next)=>{
    res.render(path.join(__dirname,'../','views','userform.ejs'),{pageTitle: "Home Page"});
});

router.post('/users',(req,res,next)=>{
    users.push(req.body.name);
    res.render(path.join(__dirname,'../','views','users.ejs'),{pageTitle: "Users Page", users: users});
});
module.exports = router;


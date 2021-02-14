const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-name', (req, res, next)=>{
    res.render(path.join(__dirname, '../', 'public', 'index.html' ));
    //res.send("<h1>Hello from app2!!</h1> <form action='/user/add-name' method='POST'>Name:<input type='text' name='name' /><button type='submit'>submit</button></form>");
});

router.post('/add-name',(req, res, next)=>{
    res.send(`<h1>${req.body.name}</h1>`); 
});

module.exports = router;

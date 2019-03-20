const express = require('express');
const app = express();
const router  = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//app.use(passport.initialize());
//app.use(passport.session());
router.all('/*',(req,res,next)=>{
    req.app.locals.layout = 'content';
    next();
});

router.get('/',(req,res)=>{
    res.render('content/newStudent');
});

//with registration
router.get('/newStudent',(req,res)=>{
    res.render('content/newStudent');
});



module.exports = router;
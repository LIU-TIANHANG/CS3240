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

router.get('/su',(req,res)=>{
    res.render('content/su');
});

router.get('/graduation',(req,res)=>{
    res.render('content/graduation');
});
router.get('/examSchedule',(req,res)=>{
    res.render('content/examSchedule');
});





module.exports = router;
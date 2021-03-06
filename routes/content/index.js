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

router.get('/applyGraduation',(req,res)=>{
    res.render('content/applyForGraduation');
});

router.get('/graduation',(req,res)=>{
    res.render('content/graduation');
});
router.get('/examSchedule',(req,res)=>{
    req.app.locals.layout = 'timetableLayout';
    res.render('content/examSchedule');
});

router.get('/moduleMapping',(req,res)=>{
        req.app.locals.layout = 'modulemap';
   res.render('content/moduleMapping');
});

router.get('/studentBill',(req,res)=>{
    res.render('content/schoolfee');
})

router.get('/yearthree',(req,res)=>{
    res.render('content/yearthree');
})

router.get('/bankacc',(req,res)=>{
    res.render('content/manageBankAccount');
})

router.get('/verifycrit',(req,res)=>{
    res.render('content/verifyCriticalData');
})

router.get('/personalinfo',(req,res)=>{
    res.render('content/personalInfo');
})

router.get('/fas',(req,res)=>{
    res.render('content/financialAid');
})

router.get('/billadd',(req,res)=>{
    res.render('content/billingAddress');
})




module.exports = router;
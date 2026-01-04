const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')

//User AApil

router.post('/user/register',authController.userRegister);
router.post('/user/login',authController.userlogin);

module.exports= router;



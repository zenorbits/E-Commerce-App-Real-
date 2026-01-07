const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');

//User Api

router.post('/user/register', authController.userRegister);
router.post('/user/login', authController.userlogin);
router.post('/user/logout', authController.userLogout);

//Admin Route



module.exports = router;



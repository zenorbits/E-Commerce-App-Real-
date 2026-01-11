const express = require('express');
const router = express.Router();
const getUserInfo = require('../controller/userInfo.controller');
const middleWare = require('../middleware/middleware');

router.get('/admin/users',middleWare.authMidddleWare,middleWare.requiredRole('admin'),getUserInfo);


module.exports = router;
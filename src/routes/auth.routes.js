const express = require('express');
const { userRegisterController, userLoginController } = require('../controllers/auth.controller');


const router = express.Router();


// /api/auth/register
router.post('/register', userRegisterController)


// /api/auth/login

router.post('/login', userLoginController)


/**
 * -POST /api/auth/logout
 */

router.post('/logout')


module.exports = router;

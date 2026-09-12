const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { createAccountController } = require('../controllers/account.controller');

const router = express.Router();


/**
 * - POST /api/accounts
 * - Creates a new account
 * - It is a Protected Route
 */

router.post('/',authMiddleware, createAccountController)

module.exports = router


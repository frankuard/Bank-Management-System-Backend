const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { createAccountController, getUserAccountController, getAccountBalanceController } = require('../controllers/account.controller');

const router = express.Router();


/**
 * - POST /api/accounts
 * - Creates a new account
 * - It is a Protected Route
 */

router.post('/',authMiddleware, createAccountController)


/**
 * -GET /api/accounts
 * -GET all accounts of the logged-in user
 * -Protected Route
 */

router.get('/',authMiddleware,getUserAccountController)

/**
 * - GET - /api/accounts/balance/:accountId
 */

router.get('/balance/:accountId',authMiddleware,getAccountBalanceController)
module.exports = router


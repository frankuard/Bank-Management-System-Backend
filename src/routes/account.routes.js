const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { createAccountController, getUserAccountController } = require('../controllers/account.controller');

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
module.exports = router


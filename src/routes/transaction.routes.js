const { Router } = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { createTransaction } = require("../controllers/transaction.controller");


const transactionRoutes = Router();


/**
 * - POST /api/transactions
 * -Create a new transaction
 */

transactionRoutes.post('/',authMiddleware,createTransaction)

module.exports = transactionRoutes;


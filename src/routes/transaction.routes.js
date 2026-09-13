const { Router } = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");


const transactionRoutes = Router();


/**
 * - POST /api/transactions
 * -Create a new transaction
 */

transactionRoutes.post('/',authMiddleware)

module.exports = transactionRoutes;


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json())
app.use(cookieParser())

/**
 * - Routes
 */
const authRouter = require('./routes/auth.routes');
const accountRouter = require('./routes/account.routes')

/**
 * - Use Routes
 */
app.use('/api/auth',authRouter) // /api/auth
app.use('/api/accounts',accountRouter) // /api/accounts

module.exports = app;

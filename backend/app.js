/** Express app  */

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

// Every route will start with /business
const businessRoutes = require('./routes/business')
app.use('/business', businessRoutes)

/** 404 handler */

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404

  // pass the error to the next piece of middleware
  return next(err)
})

/** general error handler */

app.use(function (err, req, res, next) {
  if (err.stack) console.log(err.stack)

  res.status(err.status || 500)

  return res.json({
    error: err,
    message: err.message,
  })
})

module.exports = app

const express = require("express")
const routes = require("./routes")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use('/api', routes)
app.use(function (err, _req, res, _next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app

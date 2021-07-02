const app = require("./app")
const { db } = require("./models")
require("dotenv").config()

const PORT = process.env.PORT || 3001

db.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening in port ${PORT}`))
})

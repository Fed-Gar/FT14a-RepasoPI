const { Router } = require("express")
const categoriesRoutes = require("./categories")
const usersRoutes = require("./users")
const pagesRoutes = require("./pages")

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/users", usersRoutes)
router.use("/pages", pagesRoutes)

module.exports = router

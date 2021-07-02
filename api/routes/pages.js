const router = require('express').Router();
const { Page, User, Category } = require('../models');


router.post('/', async function (req, res, next) {
  try {
    const {
      title,
      content,
      authorEmail,
      authorName,
      categories
    } = req.body
    const [user, page] = await Promise.all([
      User.findOrCreate({ where: { name: authorName, email: authorEmail } }),
      Page.create({ title, content })
    ])

    await page.setUser(user[0])
    if (Array.isArray(categories)) {
      categoriesResult = await Promise.all(
        categories.map(value => Category.findByPk(value))
      )
    } else {
      categoriesResult = await Promise.all([
        Category.findByPk(parseInt(categories))
      ])
    }
    await page.setCategories(categoriesResult)

    res.json(page)
  } catch (error) {
    next(error)
  }
});

router.get('/', async (_req, res, next) => {
  try {
    const pages = await Page.findAll({ include: [Category] })
    res.json(pages)
  } catch (error) {
    next(error)
  }
})

router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  }).then(page => {
    return page ? res.json(page) : res.sendStatus(404)
  }).catch(error => next(error))
});

module.exports = router;
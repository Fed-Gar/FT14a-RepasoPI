const { Category } = require('../models');
const router = require('express').Router();

router.get('/', function (_req, res, next) {
  Category.findAll()
    .then(categories => res.json(categories))
    .catch(error => next(error))
});

router.get('/:idCategory', function (req, res) {
  Category.findByPk(req.params.idCategory)
    .then(category =>
      category ? res.json(category) : res.sendStatus(404)
    )
    .catch(error => next(error))
});

module.exports = router;
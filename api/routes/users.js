const { Page, User } = require('../models');
const router = require('express').Router();

router.get('/', async function (_req, res) {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
});

router.get('/:id', async function (req, res) {
  try {
    const user = await User.findByPk(parseInt(req.params.id), { include: [Page] })
    return user ?
      res.json(user) :
      res.sendStatus(404)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
var express = require('express');
var User = require('../models').User;


var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    //const users = await User.findAll();
    const users = await User.findAll();
    res.render('sequilize', { users: users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 등록
router.post('/user', async (req, res) => {
  try {
    console.log(req.body);
    User.create(req.body);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 업데이트
router.put('/user', (req, res) => {
  try {
    console.log(req.body);
    User.update(req.body, { where: { id: req.body.id } });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

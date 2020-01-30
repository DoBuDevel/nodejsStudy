var express = require('express');
var User = require('../schemas/user');

var router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render('mongoose', { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      married: req.body.married,
    });
    console.log('@@@@@@@@@@@@@@@@@@@@@@');
    const result = await user.save();
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

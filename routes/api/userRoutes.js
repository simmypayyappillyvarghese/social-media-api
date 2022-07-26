const router = require('express').Router();


const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
// router.route('/').get(getUsers);

// /api/users/:userId
// router.route('/:userId').get(getSingleUser);


module.exports = router;
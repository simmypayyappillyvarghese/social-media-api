const router = require('express').Router();


const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser
} = require('../../controllers/userControllers');

// Route :  /api/users

router.route('/').get(getUsers).post(createUser);


// Route : /api/users/:userId

 router.route('/:userId').get(getSingleUser).put(updateSingleUser);


module.exports = router;
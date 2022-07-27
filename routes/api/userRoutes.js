const router = require('express').Router();


const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/userControllers');

// Route :  /api/users ,Define the Get All Users Route,Create New User Route

router.route('/').get(getUsers).post(createUser);


// Route : /api/users/:userId ,Define the Get Single User Route,Update Single User Route and Delete User Route

 router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteUser);

  // Route : /api/users/:userId/friends/

//  router.route('/:userId/friends').post(createFriend)

 // Route : /api/users/:userId/friends/:friendId

 router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);


module.exports = router;
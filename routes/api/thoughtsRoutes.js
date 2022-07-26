const router = require('express').Router();


const {
  getThoughts,
  createThoughts
  
} = require('../../controllers/thoughtsControllers');

// Route :  /api/thoughts

router.route('/').get(getThoughts).post(createThoughts);


// Route : /api/users/:userId

// router.route('/:userId').get(getSingleUser).update(updateSingleUser);


module.exports = router;
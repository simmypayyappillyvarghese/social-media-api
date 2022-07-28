const router = require('express').Router();


const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtsControllers');


// Route :  /api/thoughts to Create a Thought and Get all the thoughts

router.route('/').get(getThoughts).post(createThought);


// Route : /api/thoughts/:thoughtId to Get a thought by its id,update a thought and delete a thought

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// Route : /api/thoughts/:thoughtId/reactions to Create a 

router.route('/:thoughtId/reactions').post(createReaction)

// Route : /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;
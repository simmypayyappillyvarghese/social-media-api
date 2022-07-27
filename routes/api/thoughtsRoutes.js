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

// Route :  /api/thoughts

router.route('/').get(getThoughts).post(createThought);


// Route : /api/thoughts/:thoughtId

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// Route : /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(createReaction)

// Route : /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.postId,
      },
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
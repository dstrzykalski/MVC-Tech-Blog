const { Comment } = require('../models');

const commentData = [
  {
    content: 'This is a comment on the first post.',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'This is another comment on the first post.',
    user_id: 1,
    post_id: 1,
  },
  // Add more comments as needed
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
const { Post } = require('../models');

const postData = [
  {
    title: 'First Post',
    content: 'This is the content of the first post.',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is the content of the second post.',
    user_id: 2,
  },
  // Add more posts as needed
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
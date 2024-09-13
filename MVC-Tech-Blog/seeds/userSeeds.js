console.log('Starting user seed script');
const { User } = require('../models');
console.log('User model imported');

const userData = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
  // Add more users as needed
];

const seedUsers = async () => {
  console.log('Seeding users');
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Users seeded');
};

module.exports = seedUsers;
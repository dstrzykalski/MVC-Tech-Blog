const seedComment = require('./commentSeeds');
const seedPost = require('./postSeeds');
const seedUser = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n--- Start ---\n');
  await seedComment();
  console.log('\n--- Comments SEEDED ---\n');

  await seedPost();
  console.log('\n--- Post Seeded ---\n');

  await seedUser();
  console.log('\n--- User Seeded ---\n');

  process.exit(0);
};

seedAll();
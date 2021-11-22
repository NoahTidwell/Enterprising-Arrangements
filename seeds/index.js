const seedVenuetype = require('./venuetype-seeds')
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedVenuetype();
  console.log('\n----- VENUE TYPES SEEDED -----\n');
  await seedUsers();
  console.log('--------------');

  process.exit(0);
};

seedAll();

const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    first_name: 'Ales',
    last_name: 'Monde',
    email: 'alesmonde0@mail.com',
    phone_number: '555-1234',
    position_title: 'Manager',
    username: 'alesmonde0',
    password: 'password123'
  },
  {
    first_name: 'Jay',
    last_name: 'Willoughway',
    email: 'jwilloughway1@mail.com',
    phone_number: '555-1235',
    position_title: 'Head Manager',
    username: 'jwilloughway1',
    password: 'password123'
  },
  {
    first_name: 'Ian',
    last_name: 'Boddam',
    email: 'iboddam2@mail.com',
    phone_number: '555-1236',
    position_title: 'Event Organizer',
    username: 'iboddam2',
    password: 'password123'
  },
  {
    first_name: 'Dan',
    last_name: 'Stanmer',
    email: 'dstanmer3@mail.com',
    phone_number: '555-1237',
    position_title: 'Event Manager',
    username: 'dstanmer3',
    password: 'password123'
  },
  {
    first_name: 'Daisy',
    last_name: 'Jiri',
    email: 'djiri4@mail.com',
    phone_number: '555-1238',
    position_title: 'Sales Associate',
    username: 'djiri4',
    password: 'password123'
  },
  {
    first_name: 'Mark',
    last_name: 'Sprague',
    email: 'msprague5@mail.com',
    phone_number: '555-1239',
    position_title: 'Intern Event Planner',
    username: 'msprague5',
    password: 'password123'
  },
  {
    first_name: 'Michelle',
    last_name: 'Pergens',
    email: 'mpergens6@mail.com',
    phone_number: '555-1345',
    position_title: 'Coordinator',
    username: 'mpergens6',
    password: 'password123'
  },
  {
    first_name: 'Tanner',
    last_name: 'Penniell',
    email: 'tpenniell7@mail.com',
    phone_number: '555-1346',
    position_title: 'Event Manager',
    username: 'tpenniell7',
    password: 'password123'
  },
  {
    first_name: 'Moe',
    last_name: 'Sabbins',
    email: 'msabbins8@mail.com',
    phone_number: '555-1347',
    position_title: 'Lead Organizer',
    username: 'msabbins8',
    password: 'password123'
  },
  {
    first_name: 'James',
    last_name: 'Macarthur',
    email: 'jmacarthur9@mail.com',
    phone_number: '555-1348',
    position_title: 'Intern Organizer',
    username: 'jmacarthur9',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

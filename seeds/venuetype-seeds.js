const sequelize = require('../config/connection');
const { Venuetype } = require('../models');

const venuetypedata = [
  {
    type_name: 'Meetings and Events',
    description: 'xxx'
  },
  {
    type_name: 'Restaurants',
    description: 'xxx'
  },
  {
    type_name: 'Bars, pubs, and clubs',
    description: 'xxx'
  },
  {
    type_name: 'Hotels',
    description: 'xxx'
  },
  {
    type_name: 'Conference Centres',
    description: 'xxx'
  },
  {
    type_name: 'Business Centres',
    description: 'xxx'
  },
  {
    type_name: 'Community Centres',
    description: 'xxx'
  },
  {
    type_name: 'Sport Clubs',
    description: 'xxx'
  },  
  {
    type_name: 'Art Galleries',
    description: 'xxx'
  },
  {
    type_name: 'Academic Venues',
    description: 'xxx'
  },
  {
    type_name: 'Stately Homes',
    description: 'xxx'
  },
];

const seedVenuetype  = () => Venuetype.bulkCreate(venuetypedata );

module.exports = seedVenuetype;
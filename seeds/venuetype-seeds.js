const sequelize = require('../config/connection');
const { Venuetype } = require('../models');

const venuetypedata = [
  {
    type_name: 'Restaurants',
    description: 'Ideal for planning a dinner parties, birthdays, wedding receptions, business meetings, and tasting events'
  },
  {
    type_name: 'Bars, pubs, and clubs',
    description: 'Ideal for planning a party, live show parties, live music, comedy nights, and tasting events.'
  },
  {
    type_name: 'Hotels',
    description: 'Ideal for parties, dinner parties, tasting events, business meetings, conferences, presentations, networking events, and wedding receptions.'
  },
  {
    type_name: 'Conference Centres',
    description: 'They are perfect for everything from a small corporate training, business meetings, presentations, networking events to an epic industry conference'
  },
  {
    type_name: 'Business Centres',
    description: 'Ideal for business meetings, presentations, and networking events.'
  },
  {
    type_name: 'Community Centres',
    description: 'Ideal for meetings and community events.'
  },
  {
    type_name: 'Sport Clubs',
    description: 'Ideal for sports-related events'
  },  
  {
    type_name: 'Art Galleries',
    description: 'Ideal for workshops, artist meetups, and networking events.'
  },
  {
    type_name: 'Academic Venues',
    description: 'Ideal for writing workshops, networking events, trainings, and presentations'
  },
  {
    type_name: 'Stately Homes',
    description: 'Ideal for wedding receptions, dinner parties, and corporate retreats'
  },
  {
    type_name: 'Park and Fields',
    description: 'Ideal for markets, fairs, festivals, concerts, comedy shows, and theatre productions.'
  },
  {
    type_name: 'Stadiums and arenas',
    description: 'Ideal for sports events, concerts, comedy shows, theatre productions, and presentations.'
  },
  {
    type_name: 'Cruise Ships',
    description: 'Ideal for business meetings, conferences, presentations, networking events, and wedding receptions'
  },
  {
    type_name: 'Camps and Retreats',
    description: 'Ideal for retreats'
  }
];

const seedVenuetype  = () => Venuetype.bulkCreate(venuetypedata);

module.exports = seedVenuetype;
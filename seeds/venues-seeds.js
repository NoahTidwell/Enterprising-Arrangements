const sequelize = require('../config/connection');
const { Venues} = require('../models');

const venuesdata = [
  {
    name: 'THE WESTIN SNOWMASS RESORT',
    url: 'https://www.gosnowmass.com/groups-meetings/meeting-spaces/',
    comments: 'Great place to ski colorado',
    street: '25 Daly Lane',
    city: 'Snowmass Village',
    state: 'CO',
    zipcode: 81615,
    min: 15,
    max: 1100,
    third_party_vendors: false,
    venuetype_id: 3,
    user_id: 1
  },
  {
    name: 'K1 SPEED',
    comments: 'Great place to ski houston',
    url: 'https://www.k1speed.com/houston-location.html',
    street: '14900 NORTHWEST FWY',
    city: 'HOUSTON',
    state: 'TX',
    zipcode: 77040,
    min: 1,
    max: 60,
    third_party_vendors: true,
    venuetype_id: 2,
    user_id: 2
  },
  {
    name: 'K1 SPEED',
    comments: 'Great place to ski in san antonio',
    url: 'https://www.k1speed.com/san-antonio-location.html',
    street: '6955 NORTHWEST LOOP',
    city: 'SAN ANTONIO',
    state: 'TX',
    zipcode: 78238,
    min: 1,
    max: 50,
    third_party_vendors: true,
    venuetype_id: 2,
    user_id: 2
  },
];

const seedVenues = () => Venues.bulkCreate(venuesdata);

module.exports = seedVenues;
// import all models
const User = require('./User');
const Venuetype= require('./Venuetype')
const Venues = require('./Venues')

// create associations
// venuetype have many  venues
Venuetype.hasMany(Venues, {
    foreignKey: 'venuetype_id'
  });
  
  // one venues belongsTo a venue type
  Venues.belongsTo(Venuetype, {
    foreignKey: 'venuetype_id'
  });

// a user can have many venues
User.hasMany(Venues, {
    foreignKey: 'user_id'
});

// one venue belongsTo a user
  Venues.belongsTo(Venuetype, {
    foreignKey: 'user_id'
  });
  


module.exports = { User, Venuetype, Venues};

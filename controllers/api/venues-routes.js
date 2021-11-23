const router = require('express').Router();
const { User, Venuetype , Venues } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Venues.findAll({
    
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
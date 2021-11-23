const router = require('express').Router();

const venuetypeRoutes = require('./venuetype-routes');
const userRoutes = require('./user-routes.js');
const venuesRoutes = require('./venues-routes');

router.use('/users', userRoutes);
router.use('/venuetype', venuetypeRoutes);
router.use('/venues', venuesRoutes);

module.exports = router;

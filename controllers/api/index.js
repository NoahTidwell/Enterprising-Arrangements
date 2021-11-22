const router = require('express').Router();

const venuetypeRoutes = require('./venuetype-routes');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/venuetype', venuetypeRoutes);

module.exports = router;

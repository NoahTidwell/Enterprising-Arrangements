const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
//Future logic for dashboard path when logged in:
// const dashboardRoutes = require("./dashboard-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
//Future logic for dashboard path when logged in:
// router.use("/dashboard", dashboardRoutes);

module.exports = router;

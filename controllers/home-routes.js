const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

//Login Page link:
router.get("/login", (req, res) => {
  res.render("login");
});

//Sign-up page link:
router.get("/signup", (req, res) => {
  res.render("signup");
});

//Dashboard page link:
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
  // { loggedIn: true });
});

module.exports = router;

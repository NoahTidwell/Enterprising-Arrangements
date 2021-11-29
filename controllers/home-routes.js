const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Venuetype, Venues } = require("../models");

//Get ALL cards:
router.get("/", (req, res) => {
  console.log("======================");
  Venues.findAll({
    include: [
      {
        model: Venuetype,
        attributes: ["id", "type_name", "description"],
      },
      {
        model: User,
        attributes: [
          "id",
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "position_title",
        ],
      },
    ],
  })
    .then((dbPostData) => {
      const dvenues = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        dvenues,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Login Page link:
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//Sign-up page link:
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Venuetype, Venues } = require("../models");
const withAuth = require("../utils/auth");

//Get all venues for dashboard
//router.get('/', withAuth, (req, res) => {
router.get("/", (req, res) => {
  console.log("======================");
  Venues.findAll({
    where: {
      user_id: req.session.user_id,
    },
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
    .then((dbData) => {
      const dvenues = dbData.map((post) => post.get({ plain: true }));
      console.log(dvenues);
      res.render("dashboard", { dvenues, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//router.get('/edit/:id', withAuth, (req, res) => {
router.get("/edit/:id", (req, res) => {
  Venues.findByPk(req.params.id, {
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
    .then((dbData) => {
      if (dbData) {
        const dvenues = dbData.get({ plain: true });
        res.render("edit-venue", {
          dvenues,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

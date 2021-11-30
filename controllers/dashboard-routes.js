const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Venuetype, Venues } = require("../models");
const { venues } = require("../models/venues");
const withAuth = require("../utils/auth");

//Get all venues for a logged in user to display on dash board
router.get('/', withAuth, (req, res) => {
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
      const uservenues = dbData.map((post) => post.get({ plain: true }));
      Venuetype.findAll({}).then((dbtypes) => {
        const tvenues = dbtypes.map((post) => post.get({ plain: true }));
        const dvenues = {
          // Include the user venues and all type venues to be sent over to dashboard.handlebars
          venues: uservenues,
          typevenues: tvenues,
        };
        console.log(dvenues);
        res.render("dashboard", { dvenues, loggedIn: true });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Venues.findByPk(req.params.id, {
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

//Route
module.exports = router;

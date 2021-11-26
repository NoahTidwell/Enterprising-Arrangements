const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Venuetype, Venues } = require("../models");

//Get venues:
router.get("/", (req, res) => {
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
    ///user contact info for the venue  (first name, last name, position, phone and email.)
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

const router = require("express").Router();
const { User, Venuetype, Venues } = require("../../models");

// get all venues
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
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one venue
router.get("/:id", (req, res) => {
  // find a single venue by its `id`
  Venues.findOne({
    where: {
      id: req.params.id,
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
      if (!dbData) {
        res.status(404).json({ message: "No venue found with this id" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new venue
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', password: 'password1234'}
  Venues.create({
    name: req.body.name,
    comments: req.body.comments,
    url: req.body.url,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    min: req.body.min,
    max: req.body.max,
    third_party_vendors: req.body.third_party_vendors,
    venuetype_id: req.body.venuetype_id,
    user_id: req.session.user_id,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update venues
router.put("/:id", (req, res) => {
  Venues.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No Venue found with this id" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one venue by its `id` value
  Venues.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No Venue found with this id" });
        return;
      }
      res.json(dbData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

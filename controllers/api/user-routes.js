const router = require("express").Router();
const { User, Venues } = require("../../models");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    include: {
      model: Venues,
      attributes: [
        "id",
        "name",
        "url",
        "street",
        "city",
        "state",
        "min",
        "max",
        "zipcode",
        "third_party_vendors",
      ],
    },
    attributes: { exclude: ["password"] },
    //includde venue per user
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    include: {
      model: Venues,
      attributes: [
        "id",
        "name",
        "url",
        "street",
        "city",
        "state",
        "min",
        "max",
        "zipcode",
        "third_party_vendors",
      ],
    },
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    //include venues per user
  })
  .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create User route
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', password: 'password1234'}
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    position_title: req.body.position_title,
    username: req.body.username,
    password: req.body.password,
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Find a single user
router.put("/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
.catch(err => {
      console.log(err);
      res.status(500).json(err);
   })
});

//Login route
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user found!" });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
      req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
 });
});

router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });

//Logout function:
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();

    });
  } else {
    res.status(404).end();
  }
});

//Delete function for Admins only for removing users.
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

const {User, Venuetype, Venues } = require("../models");

const router = require("express").Router();

router.get('/', (req, res) => {
    console.log('======================');
    Venues.findAll({
      include: [
          {
          model: Venuetype,
          attributes: ['id','type_name','description'],
          },
          {
          model: User,
          attributes: ['id','first_name', 'last_name', 'email', 'phone_number', 'position_title'],
          }
      ],
    })
    .then(dbPostData => {
          const dvenues = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {
          dvenues,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Single Card Route
router.get("/", (req, res) => {
  res.render("single-card");
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

//Dashboard page link:
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
  // { loggedIn: true });
});

module.exports = router;

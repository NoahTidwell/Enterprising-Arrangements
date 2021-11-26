const { Venuetype, Venues } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
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

//==============================================================

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;

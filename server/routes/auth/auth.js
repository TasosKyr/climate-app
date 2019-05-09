const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../../models/User");
const uploader = require("../../configs/cloudinary");


router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const imgPath = req.body.imgPath
  console.log('File:', req.body.imgPath)

  if (!username || !password) {
    return res
      .status(422)
      .json({ message: "Please provide a username and a password" });
  }

  if (password.length < 8) {
    return res
      .status(422)
      .json({ message: "The password needs to have 8 characters minimum" });
  }

  User.findOne({ username })
    .then(user => {
      if (user)
        return res.status(409).json({ message: "Username already taken" });

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({
        username: username,
        password: hash,
        imgPath
      });
    })
    .then(newUser => {
      req.login(newUser, () => {
        return res.status(200).json(newUser);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  req.login(req.user, err => {
    if (err)
      return res.status(500).json({
        message: "Something went wrong in the authentication process"
      });
    return res.json(req.user);
  }),
    (error, req, res) => {
      return res.status(401).json(error);
    };
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "User successfully logged out" });
});

router.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) return res.json(req.user);
  return res.json(null);
});

module.exports = router;
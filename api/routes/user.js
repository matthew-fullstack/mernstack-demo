const express = require("express");
const { authenticate } = require("../security/jwt.user.service");
const router = express.Router();
const { users } = require("../staticdb");

router.get("/", function (req, res) {
  const { password, ...userWithoutPassword } = users.find(
    (u) => u.id === req.user.sub
  );
  res.send(userWithoutPassword);
});

router.post("/login", (req, res) => {
  authenticate(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(401).send(err));
});

router.post("/signUp", (req, res) => {
  const user = {
    id: users.length + 1,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);
  res.send(user);
});

module.exports = router;

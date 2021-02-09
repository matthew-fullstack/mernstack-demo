const config = require("../config/config.js");
const jwt = require("jsonwebtoken");
const { users } = require("../staticdb.js");

async function authenticate({ email, password }) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) throw "Username or password is incorrect";

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });

  // console.log(token);

  return {
    ...omitPassword(user),
    token,
  };
}

async function getAll() {
  return users.map((u) => omitPassword(u));
}

// helper functions

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

module.exports = {
  authenticate,
  getAll,
};

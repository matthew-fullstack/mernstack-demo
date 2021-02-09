const expressJwt = require("express-jwt");
const config = require("../config/config");

function jwt() {
  const { secret } = config;
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: ["/api/user/login", "/api/user/signUp"],
  });
}

module.exports = jwt;

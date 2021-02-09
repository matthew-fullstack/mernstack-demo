const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const company = require("./routes/company");
const user = require("./routes/user");
const { users } = require("./staticdb");
const jwt = require("./security/jwt");
const errorHandler = require("./security/error-handler");

const app = express({});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// secure the API with JWT
app.use(jwt());

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send(users);
});

app.use("/api/company", company);
app.use("/api/user", user);

const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

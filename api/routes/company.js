const express = require("express");
const router = express.Router();
const { companies } = require("../staticdb");

router.get("/", function (req, res) {
  res.send(companies.filter((c) => c.userId === req.user.sub));
});

router.post("/", function (req, res) {
  const company = {
    ...req.body,
    id: companies.length + 1,
    userId: req.user.sub,
  };
  companies.push(company);
  res.send(companies);
});

router.put("/:id", function (req, res) {
  const company = companies.find(
    (c) => c.id === +req.params.id && c.userId === req.user.sub
  );
  if (!company) return res.status(404).send("Company not found");

  company.name = req.body.name || company.name;
  company.email = req.body.email || company.email;
  company.address = req.body.address || company.address;
  company.stocks = req.body.stocks || company.stocks;

  res.send(company);
});

router.delete("/:id", function (req, res) {
  const company = companies.find(
    (c) => c.id === +req.params.id && c.userId === req.user.sub
  );
  if (!company) return res.status(404).send("Company not found");

  const deleteIndex = companies.findIndex((c) => c.id === company.id);
  companies.splice(deleteIndex, 1);

  res.send(company);
});

module.exports = router;

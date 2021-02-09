var users = [
  {
    id: 1,
    email: "user1@email.com",
    password: "$ecurit1",
  },
  {
    id: 2,
    email: "user2@email.com",
    password: "$ecurit1",
  },
];

var companies = [
  {
    id: 1,
    name: "company1",
    email: "c1@test.com",
    address: "address3",
    stocks: 5,
    userId: 1,
  },
  {
    id: 2,
    name: "company2",
    email: "c2@test.com",
    address: "address3",
    stocks: 4,
    userId: 1,
  },
  {
    id: 3,
    name: "company3",
    email: "c3@test.com",
    address: "address3",
    stocks: 3,
    userId: 2,
  },
];

module.exports = { users, companies };

const route = require("express").Router();

const apiUsers = require("./users");

route.use("/users", apiUsers);
route.get("/", async (req, res) => {
  try {
    res.send(JSON.stringify("API WORKING"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;

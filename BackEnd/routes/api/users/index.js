const route = require("express").Router();

const apiRegister = require("./register");

route.use("/register", apiRegister);

route.get("/", async (req, res) => {
  try {
    res.send(JSON.stringify("USERS WORKING"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;

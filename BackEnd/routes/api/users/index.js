const route = require("express").Router();

const apiRegister = require("./register");
const apiLogin = require("./login");
const apiLogout = require("./logout");
const apiGetUser = require("./getUser");

route.use("/register", apiRegister);
route.use("/login", apiLogin);
route.use("/logout", apiLogout);
route.use("/getUser", apiGetUser);
route.get("/", async (req, res) => {
  try {
    res.send(JSON.stringify("USERS WORKING"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;

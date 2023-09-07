const route = require("express").Router();
const connection = require("../../../database");
route.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    const values = [username, email, password];
    res.send(JSON.stringify("In Register"));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;

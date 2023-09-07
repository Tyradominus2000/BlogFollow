const route = require("express").Router();
const connection = require("../../../database");
const bcrypt = require("bcrypt");

const saltRounds = 10;
route.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const sql = `SELECT * FROM user WHERE email = "${email}"`;
    const sqlInsert =
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    connection.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send(JSON.stringify("Email already in use"));
      } else {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          const values = [username, email, hash];
          // Store hash in your password DB
          if (err) throw err;
          connection.query(sqlInsert, values, (err, result) => {
            if (err) throw err;
            res.send(JSON.stringify(true));
          });
        });
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;

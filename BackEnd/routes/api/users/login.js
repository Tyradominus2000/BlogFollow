const route = require("express").Router();
const connection = require("../../../database");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { key } = require("../../../key");
route.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const sql = `SELECT * FROM user WHERE email=?`;
    const values = [email];
    connection.query(sql, values, async (err, result) => {
      if (err) throw err;
      if (result[0] != null) {
        if (bcrypt.compareSync(password, result[0].password)) {
          console.log(result[0].Id.toString());
          const token = jsonwebtoken.sign({}, key, {
            subject: result[0].Id.toString(),
            expiresIn: 3600 * 24 * 30 * 6,
            algorithm: "RS256",
          });
          res.cookie("token", token, {
            sameSite: "none",
            secure: true,
            httpOnly: false,
          });
          res.send(JSON.stringify({ message: true, user: result[0] }));
        } else {
          res.send(JSON.stringify({ message: "Wrong password or Email" }));
        }
      } else {
        res.send(JSON.stringify({ message: "Wrong password or Email" }));
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = route;

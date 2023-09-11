const route = require("express").Router();
const jsonwebtoken = require("jsonwebtoken");
const { keyPub } = require("../../../key");
const connection = require("../../../database");
route.get("/", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, keyPub);
      console.log({ decodedToken });
      const sql = `SELECT * from user WHERE Id="${decodedToken.sub}"`;
      connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result[0]) {
          delete result[0].password;
          res.send({ message: true, user: result[0] });
        } else {
          res.send({ message: "No User affected to that Id or Invalid Token" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  } else {
    res.send({ message: "No token" });
  }
});

route.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    const sql = `SELECT * FROM user WHERE Id = "${id}"`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      if (result[0]) {
        delete result[0].password;
        res.send({ message: true, user: result[0] });
      } else {
        res.send({ message: "No User affected to that Id" });
      }
    });
  } catch (error) {
    res.status(500).send({ messafe: error.message });
  }
});

module.exports = route;

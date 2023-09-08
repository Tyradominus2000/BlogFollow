const connection = require("../../../database");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const sql = "SELECT * FROM article";
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify({ message: true, article: result }));
    });
  } catch (error) {
    res.status(500).send({ message: false, article: error.message });
  }
});

module.exports = router;

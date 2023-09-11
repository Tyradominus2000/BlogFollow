const { Router } = require("express");
const connection = require("../../../database");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { idUser, idArticle, title, description } = req.body;
    const sql = `INSERT INTO comment (date, title, description, Id_User, Id_Article) VALUES (NOW(), ?, ?, ?, ?)`;
    const values = [title, description, idUser, idArticle];
    connection.query(sql, values, (err, _) => {
      if (err) throw err;
      res.send(JSON.stringify({ message: true }));
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

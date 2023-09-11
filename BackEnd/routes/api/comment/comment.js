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
    res.status(500).send(JSON.stringify({ message: error.message }));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const idArticle = req.params.id;
    const sql = `SELECT * FROM comment WHERE Id_Article = "${idArticle}"`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      if (result.length > 0) {
        res.send(JSON.stringify({ message: true, comment: result }));
      } else {
        res.send(JSON.stringify({ message: false }));
      }
    });
  } catch (error) {
    res.status(500).send(JSON.stringify({ message: error.message }));
  }
});

module.exports = router;

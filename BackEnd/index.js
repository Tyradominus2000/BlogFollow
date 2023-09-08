const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const routes = require("./routes");

const port = 8000;

const connection = require("./database");

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});

// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());

// Middleware pour éviter les problèmes de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cookieParser());

//Requetes
app.use(routes);

// Lancement du serveur Node.js
app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});

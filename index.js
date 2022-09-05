const { json } = require("express");
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const app = express();

/* ### Model ###  */
const Uuser = require("./model/User");

/* ### Data Base ### */
connection.authenticate().then(() => {
  console.log("conectado com o banco de dados.");
});

/* ### PORT ###  */
app.listen(2632, () => {
  console.log("Server working");
});

app.use(json());
app.use(cors());

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

/* ### ROUTES ###  */
app.post("/cadastro", async (req, res) => {
  const { username, email, password } = req.body;

  const reqFields = ["username", "email", "password"];

  for (const field of reqFields) {
    if (!req.body[field]) {
      return res.status(400).json({
        causa: "Nenhum dos campos podem ser vazios",
        solucao: "Preencha todos os campos corretamente",
      });
    }
  }

  await Uuser.create({
    username: username,
    password: password,
    email: email,
  });

  res.status(201).json({
    status: "Usário cadastrado",
  });
});

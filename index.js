const { json } = require("express");
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const app = express();

/* ### Model ###  */
const Uuser = require("./model/User");
const User = require("./model/User");

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
app.post("/save", async (req, res) => {
  const { username, email, password } = req.body;

  const reqFields = ["username", "email", "password"];

  for (const field of reqFields) {
    if (!req.body[field]) {
      return res.status(400).json({ status_400 });
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

app.get("/findall", async (req, res) => {
  const response = await User.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.send(response);
});

app.get("/findone/:id", async (req, res) => {
  const id = req.params.id;

  const response = await User.findOne({
    where: { id },
  });
  if (response != undefined) {
    return res.send(response);
  }
  res.status(404).json({ status_404 });
});

/* ### STATUS HTTP ### */

const status_400 = {
  err: "O id passado é do tipo texto.",
  Payload: "O id deve conter apenas número(s).",
};

const status_404 = {
  err: "O id inserido não foi encontrado.",
  Payload: "Insira um id válido para a busca.",
};

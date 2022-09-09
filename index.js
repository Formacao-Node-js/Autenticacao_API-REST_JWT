const { json } = require("express");
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWTKey = "$2a$12$43FwZJXCAT9I.IHYa3R4OuyfpPHRk6VKvoKTTvT4qMBrsLbvWyCTa";
const userAuth = require("./middlewares");

const {
  status_200,
  status_400,
  status_401,
  status_404,
  status_500,
} = require("./status_server");

const app = express();

/* ### Model ###  */
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
app.post("/save", (req, res) => {
  const { username, email, password } = req.body;

  const reqFields = ["username", "email", "password"];

  for (const field of reqFields) {
    if (!req.body[field]) {
      return res.status(400).json(status_400[1]);
    }
  }

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  // console.log(hash);

  User.create({
    email: email,
    username: username,
    password: hash,
  })
    .then(() => {
      res.status(200).json(status_200[0]);
    })
    .catch((err) => {
      res.status(400).json({ erro: err });
    });
});

app.get("/findall", userAuth, async (req, res) => {
  req.loggedUser;
  const response = await User.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.status(200).json({ author: req.loggedUser, response: response });
});

app.get("/findone/:id", userAuth, async (req, res) => {
  const id = req.params.id;

  const response = await User.findOne({
    where: { id },
  });
  if (response != undefined) {
    return res.status(200).json({ author: req.loggedUser, response: response });
  }
  res.status(404).json({ status_404 });
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  const response = await User.findOne({
    where: { id },
  });

  if (response != undefined) {
    const { username, email, password } = req.body;

    if (username != undefined) {
      response.username = username;
      await response.save();
    }
    if (email != undefined) {
      response.email = email;
      await response.save();
    }
    if (password != undefined) {
      response.password = password;
      await response.save();
    }
  } else {
    return res.status(404).json({ status_404 });
  }

  res.status(200).json({ author: req.loggedUser }, status_200[1]);
});

app.delete("/delete/:id", userAuth, async (req, res) => {
  const id = req.params.id;

  const response = await User.findOne({
    where: { id },
  });

  if (response != undefined) {
    await User.destroy({
      where: { id },
    });

    return res.status(200).json({ author: req.loggedUser }, status_200[2]);
  }

  return res.status(404).json({ status_404 });
});

/* ### AUTHENTICATION USER ### */
app.post("/auth", async (req, res) => {
  var { email, password } = req.body;

  const response = await User.findOne({
    where: { email: email, password: password },
  });

  if (response != undefined) {
    jwt.sign(
      { email: response.email, id: response.id },
      JWTKey,
      {
        expiresIn: "48hrs",
      },
      (err, token) => {
        if (err) {
          res.status(500).json({ status_500 });
        } else {
          res.status(200).json({ Token: token });
        }
      }
    );
  } else {
    res.status(401).json(status_401[0]);
  }
});

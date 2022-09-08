const jwt = require("jsonwebtoken");
const JWTKey = "$2a$12$43FwZJXCAT9I.IHYa3R4OuyfpPHRk6VKvoKTTvT4qMBrsLbvWyCTa";
const { status_401 } = require("../status_server");

function userAuth(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    // console.log(bearer);
    const token = bearer[1];
    // console.log(token);
    jwt.verify(token, JWTKey, (err, data) => {
      if (err) {
        res.status(401).json(status_401[1]);
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, email: data.email };
        console.log("--->", data, "<-----");
        next();
      }
    });
  } else {
    res.status(401).json(status_401[1]);
  }
}

module.exports = userAuth;

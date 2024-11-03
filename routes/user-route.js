var express = require("express");
var router = express.Router();

const UserControllers = require("../controllers/user-controller");

router.post("/login", async function (req, res, next) {
  UserControllers.login(req, res);
});

module.exports = router;

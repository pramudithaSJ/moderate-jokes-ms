var express = require("express");
var router = express.Router();

const JokeControllers = require("../controllers/joke-controller");
const UserServices = require("../services/user-service");
router.get("/", UserServices.verifyToken, async function (req, res, next) {
  JokeControllers.getPendingJokes(req, res);
});

router.post("/", UserServices.verifyToken, async function (req, res, next) {
  JokeControllers.approveJoke(req, res);
});


router.get("/:id", UserServices.verifyToken, async function (req, res, next) {
  JokeControllers.getJokeById(req, res);
});

router.put(
  "/:id/approve",
  UserServices.verifyToken,
  async function (req, res, next) {
    JokeControllers.approveJoke(req, res);
  }
);


router.delete(
  "/:id",
  UserServices.verifyToken,
  async function (req, res, next) {
    JokeControllers.deleteJoke(req, res);
  }
);

module.exports = router;

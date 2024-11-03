var express = require("express");
var router = express.Router();

var JokeService = require("../services/joke.service");

router.get("/", function (req, res) {
  JokeService.getPendingJokes()
    .then(function (jokes) {
      return res.status(200).json(jokes);
    })
    ["catch"](function (error) {
      return res.status(500).json({
        error: error.message,
      });
    });
});

router.get("/:id", function (req, res) {
  JokeService.getJokeById(req.params.id)
    .then(function (joke) {
      return res.status(200).json(joke);
    })
    ["catch"](function (error) {
      return res.status(500).json({
        error: error.message,
      });
    });
});

router.put("/:id/approve", function (req, res) {
  JokeService.approveJoke(req.params.id)
    .then(function (joke) {
      return res.status(200).json(joke);
    })
    ["catch"](function (error) {
      return res.status(500).json({
        error: error.message,
      });
    });
});

router["delete"]("/:id", function (req, res) {
  JokeService.deleteJoke(req.params.id)
    .then(function (joke) {
      return res.status(200).json(joke);
    })
    ["catch"](function (error) {
      return res.status(500).json({
        error: error.message,
      });
    });
});

module.exports = router;

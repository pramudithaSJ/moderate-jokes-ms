const JokeService = require("../services/joke.service");

const getPendingJokes = async (req, res) => {
  try {
    const jokes = await JokeService.getPendingJokes();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJokeById = async (req, res) => {
  try {
    const joke = await JokeService.getJokeById(req.params.id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approveJoke = async (req, res) => {
  try {
    const joke = await JokeService.approveJoke(req.body);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJoke = async (req, res) => {
  try {
    const joke = await JokeService.deleteJoke(req.params.id);
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getPendingJokes,
  getJokeById,
  approveJoke,
  deleteJoke,
};

const UserServices = require("../services/user-service");

const login = async (req, res) => {
  try {
    UserServices.login(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  login,
};
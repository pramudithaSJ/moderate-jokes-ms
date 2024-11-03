const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();

const jokeRotute = require("./routes/joke-route");
const userRoute = require("./routes/user-route");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/jokes", jokeRotute);
app.use("/user", userRoute);



app.listen(3002, () =>
  console.log("Submit Jokes service running on port 3002")
);

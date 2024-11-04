const axios = require("axios");
const { text } = require("express");

BaseUrl = process.env.SUBMIT_JOKES_SERVICE_URL;
DeliveryServiceUrl = process.env.DELIVER_JOKES_SERVICE_URL;

const getPendingJokes = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/jokes`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getJokeById = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}/jokes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const approveJoke = async (joke) => {
  try {
    const response = await axios.post(`${DeliveryServiceUrl}/jokes`, {
      text: joke.text,
      type: joke.type,
    });
    const res = await axios.put(`${BaseUrl}/jokes/${joke._id}`, {
      text: joke.text,
      type: joke.type,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteJoke = async (id) => {
  try {
    const response = await axios.delete(`${BaseUrl}/jokes/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getPendingJokes,
  getJokeById,
  approveJoke,
  deleteJoke,
};

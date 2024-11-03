const axios = require("axios");
const { text } = require("express");

BaseUrl = process.env.SUBMIT_JOKES_SERVICE_URL;

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

const approveJoke = async (id) => {
  try {
    const response = await axios.put(`${BaseUrl}/jokes/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteJoke = async (id) => {
  try {
    const response = await axios.delete(`${BaseUrl}/jokes/${id}`);
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

const express = require("express");
const route = express.Router();

const {
  getAllJobs,
  getJob,
  postJobs,
} = require("../controllers/controllerJobs");

route.get("/jobs", getAllJobs);

route.get("/jobs/:idOffer", getJob);

route.post("/jobs", postJobs);

module.exports = route;

const express = require("express");
const route = express.Router();

const {
  getAllJobs,
  getJob,
  postJob,
  putJob,
  patchJob,
  deleteJob,
} = require("../controllers/controllerJobs");

route.get("/jobs", getAllJobs);

route.get("/jobs/:idOffer", getJob);

route.post("/jobs", postJob);

route.put("/jobs/:id", putJob);

route.patch("/jobs/:id/:attrtochange", patchJob);

route.delete("/jobs/:id", deleteJob);

module.exports = route;
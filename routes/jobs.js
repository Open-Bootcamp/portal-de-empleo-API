const express = require("express");
const route = express.Router();

const {
  getAllJobs,
  getJob,
  postJobs,
} = require("../controllers/controllerJobs");
const jobOffer = require("../models/jobOffer");

route.get("/jobs", getAllJobs);

route.get("/jobs/:idOffer", getJob);

route.post("/jobs", postJobs);

route.put("/job/:id", async (req, res) => {
  try {
    const updateJob = await jobOffer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

route.delete("/job/:id", async (req, res) => {
  try {
    const deleteJob = await jobOffer.findById(req.params.id);
    await deleteJob.remove();
    res.status(200).json({
      mensaje: "Delete Successfull!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = route;

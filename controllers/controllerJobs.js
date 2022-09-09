const jobOffer = require("../models/jobOffer");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobOffer.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    const job = await jobOffer.find({ idOffer: req.params.idOffer });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postJob = async (req, res) => {
  try {
    const job = await new jobOffer(req.body);
    const savedJob = await job.save();
    res.status(200).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putJob = async (req, res) => {
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
};

const patchJob = async (req, res) => {
  const {id, attrtochange} = req.params;
  try {
    const updateJob = await jobOffer.findByIdAndUpdate(
      id,
      { [attrtochange]: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const deleteJob = await jobOffer.findById(req.params.id);
    await deleteJob.remove();
    res.status(200).json({
      mensaje: "Delete Successfull!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllJobs,
  getJob,
  postJob,
  putJob,
  patchJob,
  deleteJob
};
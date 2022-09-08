require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const jobOffer = require("./models/jobOffer");

const mongoDBenv = process.env.DATABASE_URL;
const port = process.env.PORT || 5000;

mongoose.connect(mongoDBenv);

const database = mongoose.connection;
database.on("error", (e) => {
  console.log(e);
});
database.once("connected", () => {
  console.log("Conectado");
});

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Servidor Activo",
  };
  res.send(respuesta);
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await jobOffer.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
})

app.get("/jobs/:id", async (req, res) => {
  try {
    const job = await jobOffer.findById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
})

app.post("/jobs", async (req, res) => {
  const job = await new jobOffer(req.body)
  const savedJob = await job.save()
  res.status(200).json(savedJob);
})

app.listen(port, () => console.log(`Perfect Port ${port}`));
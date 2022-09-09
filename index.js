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
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Servidor Activo",
  };
  res.send(respuesta);
});

app.use('/', require('./routes/jobs'))

app.patch("/jobs/:id/:attrtochange", async (req, res) => {
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
});


app.listen(port, () => console.log(`Perfect Port ${port}`));
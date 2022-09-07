require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const mongoDBenv = process.env.DATABASE_URL;


const app = express();

app.get("/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Servidor Activo",
  };
  res.send(respuesta);
});



app.get("/jobs",async()=>{
  res.send({
    message:"todo bien"
  })
})


app.post("/jobs",async()=>{
  res.send({
    message:"respuesta post ok"
  })
})
//TODO:Modelo del job board para Sebastian nuevo Json

//TODO:Modelo del job board para Sebastian

const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const JOBoffers = mongoose.Schema({
  idOffer: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  logo: {
    type: String,
    required: true,
  },
  isRecent: {
    type: Boolean,
  },
  featured: {
    type: Boolean,
  },
  position: {
    type: String,
  },
  role: {
    type: String,
  },
  level: {
    type: String,
  },
  postedAt: {
    type: String,
  },
  contract: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

JOBoffers.plugin(AutoIncrement, {inc_field: 'idOffer'});
module.exports = mongoose.model("JOBoffers", JOBoffers);
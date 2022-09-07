//TODO:Modelo del job board para Sebastian

const mongoose = require("mongoose");

const JOBoffers = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    company: {
      type: String,
      required: true,
    },
    company_url: {
      type: String,
      required: true,
    },
    location: {
      region: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    position: {
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        required: true,
      },
      contract: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      how_to_apply: {
        type: String
      },
      isnew: {
        Boolean,
      },
      featured: {
        Boolean,
      },
      contract: {
        type: String,
        required: true,
      },
    },
    company_logo: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
  }
);

module.exports = mongoose.model("JOBoffers", JOBoffers);

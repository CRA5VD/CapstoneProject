const mongoose = require('mongoose');

const Schema = mongoose.Schema
const entertainmentSportsSchema = new Schema({

    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    imageURL: {
      type: String
    },
    website: {
      type: String
    },
    area: {
      type: String
    },
    address: {
      type: String
    }
})

const EntertainmentSports = mongoose.model('EntertainmentSports', entertainmentSportsSchema)
module.exports = EntertainmentSports
const mongoose = require('mongoose');

const Schema = mongoose.Schema
const artsMusicSchema = new Schema({

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

const ArtsMusic = mongoose.model('ArtsMusic', artsMusicSchema)
module.exports = ArtsMusic
const mongoose = require('mongoose');

const Schema = mongoose.Schema
const lodgingTransportSchema = new Schema({

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

const LodgingTransport = mongoose.model('LodgingTransport', lodgingTransportSchema)
module.exports = LodgingTransport
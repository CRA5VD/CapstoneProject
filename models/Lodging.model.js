const mongoose = require('mongoose');

const Schema = mongoose.Schema
const lodgingSchema = new Schema({

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

const Lodging = mongoose.model('Lodging', lodgingSchema, 'lodging')
module.exports = Lodging


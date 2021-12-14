const mongoose = require('mongoose');

const Schema = mongoose.Schema
const transportSchema = new Schema({

    name: {
      type: String,
      required: true
    },
    map: {
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
    },
    phone: {
      type: String
    }
})

const Transport = mongoose.model('Transport', transportSchema, 'transports')
module.exports = Transport
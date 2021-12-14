const mongoose = require('mongoose');

const Schema = mongoose.Schema
const foodDrinkSchema = new Schema({

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

const FoodDrink = mongoose.model('FoodDrink', foodDrinkSchema, 'fooddrinks')
module.exports = FoodDrink
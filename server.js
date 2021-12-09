// packages needed for server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
// server setup
const app = express();
const port = process.env.PORT || 5000;

// telling app what to se
app.use(cors());
app.use(express.json());
// static frontend on heroku
app.use(express.static('client/build'))

// mongoDB connection 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

//  ----------  Food And Drinks

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const foodDrinksRouter = require('./routes/FoodDrinks')



app.use('/fooddrink', foodDrinksRouter)
/* Production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build'))
  })
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// ---------- Arts And Music

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const artsMusicRouter = require('./routes/ArtsMusic')



app.use('/artsmusic', artsMusicRouter)
/* Production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build'))
  })
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
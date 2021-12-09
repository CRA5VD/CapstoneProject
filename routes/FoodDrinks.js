const router = require('express').Router()


let FoodDrinks = require('../models/FoodDrinks.model')


router.route('/').get((req, res) => {
    FoodDrinks.find()
    .then(fooddrinks  =>
        res.json(fooddrinks))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
    FoodDrinks.findById(req.params.id)
    .then((fooddrinks) =>{
        res.json(fooddrinks)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    FoodDrinks.findById(req.params.id)
        .then((fooddrinks)=>{
            fooddrinks.name = req.body.name
            fooddrinks.description = req.body.description
            fooddrinks.website = req.body.website
            fooddrinks.imageURL = req.body.imageURL
            fooddrinks.area = req.body.area
            fooddrinks.address = req.body.address
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

    router.route('/add').post((req,res) => {
        const name = req.body.name
        const description = req.body.description
        const website = req.body.website
        const imageURL = req.body.imageURL
        const area = req.body.area
        const address = req.body.address

    

        const newFoodDrink = new FoodDrinks ({
            name,
            description,
            website,
            imageURL,
            area,
            address
        })
        newFoodDrink.save()
        .then(() => {
            res.json('FoodDrink Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;


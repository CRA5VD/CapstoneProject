const router = require('express').Router()


let EntertainmentSports = require('../models/EntertainmentSports.model')


router.route('/:id').get((req, res) => {
    EntertainmentSports.find()
    .then(entertainmentsports  =>
        res.json(entertainmentsports))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
    EntertainmentSports.findById(req.params.id)
    .then((entertainmentsports) =>{
        res.json(entertainmentsports)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    EntertainmentSports.findById(req.params.id)
        .then((entertainmentsports)=>{
            entertainmentsports.name = req.body.name
            entertainmentsports.description = req.body.description
            entertainmentsports.website = req.body.website
            entertainmentsports.imageURL = req.body.imageURL
            entertainmentsports.area = req.body.area
            entertainmentsports.address = req.body.address
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

    

        const newEntertainmentSports = new EntertainmentSports ({
            name,
            description,
            website,
            imageURL,
            area,
            address
        })
        newEntertainmentSports.save()
        .then(() => {
            res.json('EntertainmentSports Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;


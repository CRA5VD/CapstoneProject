const router = require('express').Router()


let Lodging = require('../models/Lodging.model')


router.route('/').get((req, res) => {
  Lodging.find()
    .then(lodgings  =>
        res.json(lodgings))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  Lodgings.findById(req.params.id)
    .then((lodgings) =>{
        res.json(lodgings)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
  Lodgings.findById(req.params.id)
        .then((lodgings)=>{
            lodgings.name = req.body.name
            lodgings.description = req.body.description
            lodgings.website = req.body.website
            lodgings.imageURL = req.body.imageURL
            lodgings.area = req.body.area
            lodgings.address = req.body.address
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

    

        const newLodging = new Lodgings ({
            name,
            description,
            website,
            imageURL,
            area,
            address
        })
        newLodging.save()
        .then(() => {
            res.json('Lodging Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;
const router = require('express').Router()


let Lodging = require('../models/Lodging.model')


router.route('/').get((req, res) => {
  Lodging.find()
    .then(lodging  =>
        res.json(lodging))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  Lodging.findById(req.params.id)
    .then((lodging) =>{
        res.json(lodging)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
  Lodging.findById(req.params.id)
        .then((lodging)=>{
            lodging.name = req.body.name
            lodging.description = req.body.description
            lodging.website = req.body.website
            lodging.imageURL = req.body.imageURL
            lodging.area = req.body.area
            lodging.address = req.body.address
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

    

        const newLodging = new Lodging ({
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
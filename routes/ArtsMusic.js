const router = require('express').Router()


let ArtsMusic = require('../models/ArtsMusic.model')


router.route('/').get((req, res) => {
  ArtsMusic.find()
    .then(artsmusics  =>
        res.json(artsmusics))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  ArtsMusics.findById(req.params.id)
    .then((artsmusics) =>{
        res.json(artsmusics)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
  ArtsMusics.findById(req.params.id)
        .then((artsmusics)=>{
            artsmusics.name = req.body.name
            artsmusics.description = req.body.description
            artsmusics.website = req.body.website
            artsmusics.imageURL = req.body.imageURL
            artsmusics.area = req.body.area
            artsmusics.address = req.body.address
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

    

        const newArtsMusic = new ArtsMusics ({
            name,
            description,
            website,
            imageURL,
            area,
            address
        })
        newArtsMusic.save()
        .then(() => {
            res.json('ArtsMusic Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;
const router = require('express').Router()


let ArtsMusic = require('../models/ArtsMusic.model')


router.route('/').get((req, res) => {
  ArtsMusic.find()
    .then(artsmusic  =>
        res.json(artsmusic))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  ArtsMusic.findById(req.params.id)
    .then((artsmusic) =>{
        res.json(artsmusic)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
  ArtsMusic.findById(req.params.id)
        .then((artsmusic)=>{
            artsmusic.name = req.body.name
            artsmusic.description = req.body.description
            artsmusic.website = req.body.website
            artsmusic.imageURL = req.body.imageURL
            artsmusic.area = req.body.area
            artsmusic.address = req.body.address
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

    

        const newArtsMusic = new ArtsMusic ({
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
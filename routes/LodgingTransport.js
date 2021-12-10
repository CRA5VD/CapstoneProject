const router = require('express').Router()


let LodgingTransport = require('../models/LodgingTransport.model')


router.route('/').get((req, res) => {
  LodgingTransport.find()
    .then(lodgingtransport  =>
        res.json(lodgingtransport))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  LodgingTransport.findById(req.params.id)
    .then((lodgingtransport) =>{
        res.json(lodgingtransport)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
  LodgingTransport.findById(req.params.id)
        .then((lodgingtransport)=>{
            lodgingtransport.name = req.body.name
            lodgingtransport.description = req.body.description
            lodgingtransport.website = req.body.website
            lodgingtransport.imageURL = req.body.imageURL
            lodgingtransport.area = req.body.area
            lodgingtransport.address = req.body.address
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

    

        const newLodgingTransport = new LodgingTransport ({
            name,
            description,
            website,
            imageURL,
            area,
            address
        })
        newLodgingTransport.save()
        .then(() => {
            res.json('LodgingTransport Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;

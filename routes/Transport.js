const router = require('express').Router()


let Transport = require('../models/Transport.model')


router.route('/').get((req, res) => {
  Transport.find()
    .then(transports  =>
        res.json(transports))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  Transports.findById(req.params.id)
    .then((transports) =>{
        res.json(transports)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Transports.findById(req.params.id)
        .then((transports)=>{
            transports.name = req.body.name
            transports.map = req.body.map
            transports.website = req.body.website
            transports.imageURL = req.body.imageURL
            transports.area = req.body.area
            transports.phone = req.body.phone
            transports.address = req.body.address
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

    router.route('/add').post((req,res) => {
        const name = req.body.name
        const map = req.body.map
        const website = req.body.website
        const imageURL = req.body.imageURL
        const area = req.body.area
        const phone = req.body.phone
        const address = req.body.address
    

        const newTransport = new Transports ({
            name,
            map,
            website,
            imageURL,
            area,
            phone,
            address
        })
        newTransport.save()
        .then(() => {
            res.json('Transport Added to database')
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        })
    })






module.exports = router;

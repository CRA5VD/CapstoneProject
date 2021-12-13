const router = require('express').Router()


let Transport = require('../models/Transport.model')


router.route('/').get((req, res) => {
  Transport.find()
    .then(transport  =>
        res.json(transport))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});


router.route('/:id').get((req, res) => {
  Transport.findById(req.params.id)
    .then((transport) =>{
        res.json(transport)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Transport.findById(req.params.id)
        .then((transport)=>{
            transport.name = req.body.name
            transport.map = req.body.map
            transport.website = req.body.website
            transport.imageURL = req.body.imageURL
            transport.area = req.body.area
            transport.phone = req.body.phone
            transport.address = req.body.address
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
    

        const newTransport = new Transport ({
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

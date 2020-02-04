const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const theatre = require('../../models/theatres');

router.post('/', (req, res) => {
    theatre.create({
        name: req.body.name,
        address:{
            line1: req.body.line1,
            line2: req.body.line2,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            pin: req.body.pin,
        },
        contact: req.body.contact
    }).then(theatreDetail => {
        GATEKEEPER.response(res, 201, theatreDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
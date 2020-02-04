const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const screen = require('../../models/screens');

router.post('/', (req, res) => {
    screen.create({
        theatre_id: req.body.theatre_id,
        name: req.body.name,
        number_of_seats: req.body.number_of_seats,
        description: req.body.description,
        status: req.body.status
    }).then(screenDetail => {
        GATEKEEPER.response(res, 201, screenDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
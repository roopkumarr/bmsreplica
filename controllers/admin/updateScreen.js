const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const screen = require('../../models/screens');

router.put('/status/:id', (req, res) => {
    screen.updateOne({_id: req.params.id}, {$set: {status: req.body.status}})
    .then(updatedscreen => {
        GATEKEEPER.response(res, 201, updatedscreen);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

router.put('/:id', (req, res) => {
    const objForUpdate ={};
    if (req.body.name) objForUpdate.name = req.body.name;
    if (req.body.number_of_seats) objForUpdate.number_of_seats = req.body.number_of_seats;
    if (req.body.description) objForUpdate.description = req.body.description;
    screen.updateOne({_id: req.params.id}, objForUpdate)
    .then(updatedscreen => {
        GATEKEEPER.response(res, 201, updatedscreen);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const screen = require('../../models/screens');

router.put('/status/:id', (req, res) => {
    screen.update({_id: req.params._id}, {$set: {status: req.params.status}})
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
    screen.update({_id: req.params._id}, objForUpdate)
    .then(updatedscreen => {
        GATEKEEPER.response(res, 201, updatedscreen);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
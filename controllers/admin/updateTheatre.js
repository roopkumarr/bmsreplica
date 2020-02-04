const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const theatre = require('../../models/theatres');

router.put('/:id', (req, res) => {
    const objForUpdate = {};
    if (req.body.name) objForUpdate.name = req.body.name;
    if (req.body.line1) objForUpdate.address.line1 = req.body.line1;
    if (req.body.line2) objForUpdate.address.line2 = req.body.line2;
    if (req.body.city) objForUpdate.address.city = req.body.city;
    if (req.body.state) objForUpdate.address.state = req.body.state;
    if (req.body.country) objForUpdate.address.country = req.body.country;
    if (req.body.pin) objForUpdate.address.pin = req.body.pin;
    if (req.body.contact) objForUpdate.contact = req.body.contact;
    theatre.updateOne({ _id: req.params.id }, objForUpdate)
        .then(theatreDetail => {
            GATEKEEPER.response(res, 201, theatreDetail);
        }).catch(err => {
            GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
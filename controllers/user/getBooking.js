const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const booking = require('../../models/bookings');

router.get('/user/:userid', (req, res) => {
    booking.find({user_id: req.params.userid})
    .then(bookingDetail => {
        GATEKEEPER.response(res, 201, bookingDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
    });
});

router.get('/:id', (req, res) => {
    booking.findById(req.params.id)
    .then(bookingDetail => {
        GATEKEEPER.response(res, 201, bookingDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
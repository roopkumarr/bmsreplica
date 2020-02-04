const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const booking = require('../../models/bookings');

router.put('/:id', (req, res) => {
    booking.update({_id: req.params._id},{$set:{status: req.body.status}})
    .then(bookingDetail => {
        GATEKEEPER.response(res, 201, bookingDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
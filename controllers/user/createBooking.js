const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const booking = require('../../models/bookings');

router.post('/', (req, res) => {
    booking.create({
        movies_screen_id: req.body.movies_screen_id,
        user_id: req.body.user_id,
        seats_booked: req.body.seats_booked,
    }).then(bookingDetail => {
        GATEKEEPER.response(res, 201, bookingDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
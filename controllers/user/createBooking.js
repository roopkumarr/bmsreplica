const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const booking = require('../../models/bookings');
const moviescreen = require('../../models/movies_screened');
var seatres;
router.post('/', (req, res) => {
    moviescreen.findById(req.body.movies_screen_id, { seats_available: 1 })
        .then(moviescreenDetail => {
            if (moviescreenDetail.seats_available >= req.body.seats_booked) {
                seatres = moviescreenDetail.seats_available - req.body.seats_booked;
                moviescreen.updateOne({ _id: req.body.movies_screen_id }, { $set: { seats_available: seatres } })
                    .then(moviescreenRes => {
                        booking.create({
                            movies_screen_id: req.body.movies_screen_id,
                            user_id: req.body.user_id,
                            seats_booked: req.body.seats_booked,
                        }).then(bookingDetail => {
                            GATEKEEPER.response(res, 201, bookingDetail);
                        }).catch(err => {
                            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
                        });
                    }).catch(err => {
                        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
                    });
            }
            else {
                GATEKEEPER.response(res, 200, JSON.stringify({ 'message': "Could not book the number of tickets" }));
            }
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const moviescreen = require('../../models/movies_screened');

router.post('/', (req, res)=>{
    moviescreen.create({
        theatre_id: req.body.theatre_id,
        movie_id: req.body.movie_id,
        screen_id: req.body.screen_id,
        seats_available: req.body.seats_available
    }).then(movieScreened =>{
        GATEKEEPER.response(res, 201, movieScreened);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
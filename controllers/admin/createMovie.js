const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const movie = require('../../models/movies');

router.post('/', (req, res) => {
    movie.create({
        name: req.body.name,
        language: req.body.language,
        release_date: req.body.release_date,
        description: req.body.description,
        img: req.body.img
    }).then(movieDetail => {
        GATEKEEPER.response(res, 201, movieDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
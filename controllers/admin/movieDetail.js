const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const movie = require('../../models/movies');

router.get('/', (req, res) => {
    movie.find()
    .then(moviesDetail => {
        GATEKEEPER.response(res, 201, moviesDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

router.get('/:id', (req, res) => {
    movie.findById(req.params.id)
    .then(moviesDetail => {
        GATEKEEPER.response(res, 201, moviesDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
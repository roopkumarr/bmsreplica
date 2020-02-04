const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const moviescreen = require('../../models/movies_screened');

router.get('/', (req, res)=>{
    moviescreen.find()
    .then(movieScreened =>{
        GATEKEEPER.response(res, 201, movieScreened);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

router.get('/:id', (req, res)=>{
    moviescreen.findById(req.params.id)
    .then(movieScreened =>{
        GATEKEEPER.response(res, 201, movieScreened);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
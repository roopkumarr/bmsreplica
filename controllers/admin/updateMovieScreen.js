const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const moviescreen = require('../../models/movies_screened');

router.get('/:id', (req, res)=>{
    moviescreen.update({_id:req.params.id}, {$set:{ seats_available: req.body.seats_available}})
    .then(updateDetail =>{
        GATEKEEPER.response(res, 201, updateDetail);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
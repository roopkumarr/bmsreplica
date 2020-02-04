const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const screen = require('../../models/screens');

router.get('/', (req, res) => {
    screen.find()
    .then(screenDetails => {
        GATEKEEPER.response(res, 201, screenDetails);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

router.get('/theatre/:theatre_id', (req, res) => {
    screen.find({theatre_id: req.params.theatre_id})
    .then(screenDetails => {
        GATEKEEPER.response(res, 201, screenDetails);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

router.get('/:id', (req, res) => {
    screen.findById(req.params.id)
    .then(screenDetails => {
        GATEKEEPER.response(res, 201, screenDetails);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
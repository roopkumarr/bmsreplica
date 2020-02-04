const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const theatre = require('../../models/theatres');

router.get('/', (req, res) => {
    theatre.find()
        .then(theatres => {
            GATEKEEPER.response(res, 201, theatres);
        }).catch(err => {
            GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
        });
});

router.get('/:id', (req, res) => {
    theatre.findById(req.params.id)
        .then(theatreDetail => {
            GATEKEEPER.response(res, 201, theatreDetail);
        }).catch(err => {
            GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
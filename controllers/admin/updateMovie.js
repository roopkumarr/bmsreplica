const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const movie = require('../../models/movies');

router.put('/:id', (req, res) => {
    const objForUpdate = {};
    if (req.body.name) objForUpdate.name = req.body.name;
    if (req.body.language) objForUpdate.language = req.body.language;
    if (req.body.release_date) objForUpdate.release_date = req.body.release_date;
    if (req.body.description) objForUpdate.description = req.body.description;
    if (req.body.img) objForUpdate.img = req.body.img;
    movie.update({ _id: req.params.id }, objForUpdate)
        .then(updatedDetails => {
            GATEKEEPER.response(res, 201, updatedDetails);
        }).catch(err => {
            GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
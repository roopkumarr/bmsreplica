const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const user = require('../../models/users');

router.put('/:id', (req, res) => {
    const objForUpdate = {};
    if (req.body.name) objForUpdate.name = req.body.name;
    if (req.body.contact) objForUpdate.phone = req.body.contact;
    user.update({ _id: req.params.id }, objForUpdate)
        .then(user => {
            GATEKEEPER.response(res, 201, user);
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
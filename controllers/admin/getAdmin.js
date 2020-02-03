const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const admin = require('../../models/admins');

router.get('/', (req, res) => {
    admin.find()
        .then(users => {
            GATEKEEPER.response(res, 201, users);
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

router.get('/:id', (req, res) => {
    admin.findById(req.params.id)
        .then(user => {
            GATEKEEPER.response(res, 201, user);
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const user = require('../../models/users');

router.get('/', (req, res) => {
    user.find({},{
        "name": 1,
        "email": 1,
        "contact": 1
    })
        .then(users => {
            GATEKEEPER.response(res, 201, users);
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const user = require('../../models/users');

router.post('/', (req, res) => {
    user.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: bcrypt.hashSync(password, salt),
    }).then(user => {
        GATEKEEPER.response(res, 201, user);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
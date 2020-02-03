const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const admin = require('../../models/admins');

router.post('/', (req, res) => {
    admin.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        // password: req.body.password,
        password: bcrypt.hashSync(password, salt),
    }).then(user => {
        GATEKEEPER.response(res, 201, user);
    }).catch(err => {
        GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const user = require('../../models/users');

router.put('/:id', (req, res) => {
    user.findById(req.params.id)
        .then(userdetail => {
            if (bcrypt.compareSync(req.body.old_password, userdetail.password)) {
                if (req.body.old_password !== req.body.new_password) {
                    user.updateOne({ _id: req.params.id }, { password: bcrypt.hashSync(req.body.new_password, salt) })
                        .then(user => {
                            GATEKEEPER.response(res, 201, user);
                        }).catch(err => {
                            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': 'Auth failed wrong password' }));
                        });
                }
                else
                    GATEKEEPER.response(res, 400, JSON.stringify({ 'message': 'old and new password can\'t be same' }));
            }
            else
                GATEKEEPER.response(res, 401, JSON.stringify({ 'message': 'Auth failed wrong password' }));
        }).catch(err => {
            GATEKEEPER.response(res, 401, JSON.stringify({ 'message': err.message }));
        });
});

module.exports = router;
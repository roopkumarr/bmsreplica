const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const bcrypt = require('bcrypt');
const admin = require('../../models/admins');

router.post('/', (req, res) => {
    admin.findOne({ email: req.body.email }).lean()
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)){
          var data= user;
          delete data['password'];
            GATEKEEPER.response(res, 202, data);
        }     
        else
          GATEKEEPER.response(res, 401, JSON.stringify({ 'message': 'Authentication failed' }));
      }).catch(err => {
        GATEKEEPER.response(res, 401, JSON.stringify({ 'message': 'Authentication failed' }));
      });
  });

module.exports = router;
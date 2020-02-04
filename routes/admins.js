const express = require('express');
const router = express.Router()
// All the Admin routes 

const createAdmin = require('../controllers/admin/createAdmin');
const updateAdmin = require('../controllers/admin/updateAdmin');
const updateAdminPass = require('../controllers/admin/updateAdminPass');
const login = require('../controllers/admin/login');

const getUser = require('../controllers/admin/getUser');
const getAdmin = require('../controllers/admin/getAdmin');

router.use('/', createAdmin);
router.use('/', updateAdmin);
router.use('/pass', updateAdminPass);
router.use('/login', login);

router.use('/user', getUser);
router.use('/admin', getAdmin);

module.exports = router;
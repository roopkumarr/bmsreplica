const express = require('express');
const router = express.Router();
// All the User route

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const updateUserPass = require('../controllers/user/updateUserPass');
const login = require('../controllers/user/login');

const createBooking = require('../controllers/user/createBooking');
const cancelBooking = require('../controllers/user/cancelBooking');
const getBooking = require('../controllers/user/getBooking');

router.use('/', createUser);
router.use('/', updateUser);
router.use('/pass', updateUserPass);
router.use('/login', login);

router.use('/booking', createBooking);
router.use('/booking', cancelBooking);
router.use('/booking', getBooking);

module.exports = router;

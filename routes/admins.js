const express = require('express');
const router = express.Router()
// All the Admin routes 

const createAdmin = require('../controllers/admin/createAdmin');
const updateAdmin = require('../controllers/admin/updateAdmin');
const updateAdminPass = require('../controllers/admin/updateAdminPass');
const login = require('../controllers/admin/login');

const getUser = require('../controllers/admin/getUser');
const getAdmin = require('../controllers/admin/getAdmin');

const createMovie = require('../controllers/admin/createMovie');
const updateMovie = require('../controllers/admin/updateMovie');
const getMovie = require('../controllers/admin/movieDetail');

const createTheatre = require('../controllers/admin/createTheatre');
const updateTheatre = require('../controllers/admin/updateTheatre');
const getTheatre = require('../controllers/admin/theatreDetail');

const createScreen = require('../controllers/admin/createScreen');
const updateScreen = require('../controllers/admin/updateScreen');
const getScreen = require('../controllers/admin/getScreen');

const createMovieScreen = require('../controllers/admin/createMovieScreen');
const getMovieScreen = require('../controllers/admin/getMovieScreened');
const updateMovieScreen = require('../controllers/admin/updateMovieScreen');


router.use('/', createAdmin);
router.use('/', updateAdmin);
router.use('/pass', updateAdminPass);
router.use('/login', login);

router.use('/user', getUser);
router.use('/admin', getAdmin);

router.use('/movie', createMovie);
router.use('/movie', updateMovie);
router.use('/movie', getMovie);

router.use('/theatre', createTheatre);
router.use('/theatre', updateTheatre);
router.use('/theatre', getTheatre);

router.use('/screen', createScreen);
router.use('/screen', updateScreen);
router.use('/screen', getScreen);
// TODO movies screening routes booking logic, availability filter populate
router.use('/moviescreen',createMovieScreen);
router.use('/moviescreen',getMovieScreen);
router.use('/moviescreen',updateMovieScreen);

module.exports = router;
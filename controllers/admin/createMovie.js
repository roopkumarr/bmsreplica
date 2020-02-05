const express = require('express');
const router = express.Router();
const GATEKEEPER = require('../../engineering/gatekeeper');
const multer = require('multer');
const movie = require('../../models/movies');

// router.post('/', (req, res) => {
//     movie.create({
//         name: req.body.name,
//         language: req.body.language,
//         release_date: req.body.release_date,
//         description: req.body.description,
//         img: req.body.img
//     }).then(movieDetail => {
//         GATEKEEPER.response(res, 201, movieDetail);
//     }).catch(err => {
//         GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
//     });
// });

// With image upload
let fileNameSingle;

const storageStrategySingle = multer.diskStorage({
    destination: './uploads/movies/',
    filename: function (req, file, cb) {
        fileNameSingle = Date.now() + "_" + file.originalname;
        // console.log("===>", fileNameSingle);
        cb(null, fileNameSingle);
    }
});

const uploadimg = multer({
    storage: storageStrategySingle
}).single('img');

router.post('/', async(req, res) => {
    await uploadimg(req, res, (err) =>{
        if(!req.file)
        {
            res.status(400).send(JSON.stringify({'message':'No File uploaded'}));
        }
        else
        {
            if(err)
            {
                res.status(400).send(JSON.stringify({'message':'File upload error'}));
            }else{
                movie.create({
                    name: req.body.name,
                    language: req.body.language,
                    release_date: req.body.release_date,
                    description: req.body.description,
                    img: '/movie/'+fileNameSingle
                }).then(movieDetail => {
                    GATEKEEPER.response(res, 201, movieDetail);
                }).catch(err => {
                    GATEKEEPER.response(res, 400, JSON.stringify({ 'message': err.message }));
                });
            }
        }
    });
});

module.exports = router;
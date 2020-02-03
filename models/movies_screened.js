const mongoose = require('mongoose');

const movies_screenSchema = new mongoose.Schema({
    theatre_id:{
        type: mongoose.Types.ObjectId,
        ref: 'theatres'
    },
    movie_id:{
        type: mongoose.Types.ObjectId,
        ref: 'movies'
    },
    screen_id:{
        type: mongoose.Types.ObjectId,
        ref: 'screens'
    },
    seats_available:{
        type: Number,
    }
},{
    timestamps:true,
});

module.exports = mongoose.model('movies_screened', movies_screenSchema);
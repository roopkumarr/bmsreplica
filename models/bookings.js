const mongoose = require('mongoose');

const movies_screenSchema = new mongoose.Schema({
    movies_screen_id:{
        type: mongoose.Types.ObjectId,
        ref: 'movies_screened'
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    seats_booked:{
        type: Number,
    },
    status:{
        type: String,
        enum:['Booked', 'Canceled'],
        default:'Booked'
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('movies_screened', movies_screenSchema);
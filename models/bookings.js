const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
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
        enum:['Booked', 'Cancel_process','Canceled'],
        default:'Booked'
    },
    recepiant_mail:{
        type: String,
    }
},{
    timestamps:true,
});

module.exports = mongoose.model('bookings', bookingSchema);
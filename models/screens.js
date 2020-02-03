const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    theatre_id:{
        type: mongoose.Types.ObjectId,
        ref: 'theatres'
    },
    name:{
        type: String,
    },
    number_of_seats:{
        type: Number,
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum:['open', 'close'],
        default:'open'
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('screens', screenSchema);
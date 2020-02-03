const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    language:{
        type: String,
    },
    release_date:{
        type: Date,
    },
    description:{
        type: String,
    },
    img:{
        type: String,
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('movies', movieSchema);
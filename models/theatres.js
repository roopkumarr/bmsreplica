const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    address: {
        line1:{
            type: String,
        },
        line2:{
            type: String,
        },
        city:{
            type: String,
        },
        state:{
            type: String,
        },
        country:{
            type: String,
        },
        pin:{
            type: String,
        }
    },
    contact:{
        type: String,
    },
},{
    timestamps:true,
});

module.exports = mongoose.model('theatres', theatreSchema);
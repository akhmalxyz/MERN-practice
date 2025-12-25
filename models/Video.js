const mongoose = require('mongoose');

const Video = new mongoose.Schema({
    uploader:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    link:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    videoType:{
        type:String,
        default: "All"
    },
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    }
},{timestamps: true});

module.exports = mongoose.model('video', Video);
const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'user',
        required: true
    },
    content:{
        type: string,
        required: true
    },
    video:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "video",
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('comments', Comments);
const Video = require('../models/Video');

exports.uploadVideo = async (req, res)=>{
    try{
        const {title, description, link, thumbnail, videoType} = req.body;
        const videoUpload = new Video({uploader: req.user._id, title, description, link, thumbnail, videoType});
        await videoUpload.save();
        res.status(200).json({success:"true", videoUpload})
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
}

exports.getAllVideos = async (req, res)=>{
    try{
        const videos = await Video.find().populate('user', 'channelName userName profilePic createdAt');
        res.status(200).json({success: true, "videos": videos});
    }
    catch(error){
        res.status(500).json({error:"Server error"});
    }
}

exports.getVideoById = async(req, res)=>{
    try{
        const {id} = req.params;
        const videos = await Video.findById(id);
        res.status(200).json({success: true, "video": videos});
    }
    catch(error){
        res.status(500).json({error:"Server error"});
    }
}

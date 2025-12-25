const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/video');
const auth = require('../middleware/authentication');

router.post('/upload', auth, VideoController.uploadVideo);
router.post('/getVideos', VideoController.getAllVideos)
router.get('/getAllVideos', VideoController.getAllVideos);
router.get('/getVideoById', VideoController.getVideoById);

module.exports = router;
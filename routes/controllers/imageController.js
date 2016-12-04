var fs = require('fs');
var pipoLogger = require('../utils/pipoLogger');
var config = require('../configureImagePath');
var imageService = require('../services/imageService');
// Create endpoint /api/v1/images/upload

var imageController = function() {

    var getImageProfile = function(req, res) {
        try {
            var file = req.params.file;
            imageService.getImageWithPath(res, config.getPathImageUser() + file);
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };

    var postImageProfile = function(req, res) {
        try {
            imageService.postImageWithPath(req, res, config.getPathImageUser(),
                90, 90, '/images/profile/', 'jpg');
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };

    var getImageEvent = function(req, res) {
        try {
            var file = req.params.file;
            imageService.getImageWithPath(res, config.getPathImageTicket() + file);
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };

    var postImageEvent = function(req, res) {
        try {
            imageService.postImageWithPath(req, res, config.getPathImageTicket(),
                600, 800, '/images/event/', 'jpg');
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };
    
    return {
        postImageProfile: postImageProfile,
        getImageProfile: getImageProfile,
        getImageEvent: getImageEvent,
        postImageEvent: postImageEvent
    }
}();
module.exports = imageController;
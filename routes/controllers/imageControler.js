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
                60, 60, '/images/profile/', 'jpg');
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };

    var getImageTicket = function(req, res) {
        try {
            var file = req.params.file;
            imageService.getImageWithPath(res, config.getPathImageTicket() + file);
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };

    var postImageTicket = function(req, res) {
        try {
            imageService.postImageWithPath(req, res, config.getPathImageTicket(),
                400, 300, '/images/ticket/', 'jpg');
        } catch (err) {
            pipoLogger.log(err)
            res.json("Error:");
        }

    };
    
    return {
        postImageProfile: postImageProfile,
        getImageProfile: getImageProfile,
        getImageTicket: getImageTicket,
        postImageTicket: postImageTicket
    }
}();
module.exports = imageController;
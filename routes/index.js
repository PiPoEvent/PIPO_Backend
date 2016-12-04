var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
var multer = require('multer');
var configDatabase = require('./utils/configDatabase');
var pipoLogger = require('./utils/pipoLogger');
var API = require('./utils/apiConstant');

// Multer Upload file
var uploadImage = multer({
    dest: './images'
});
var upload = multer()

// Import Controller
var authController = require('./controllers/authController');
var imageController = require('./controllers/imageController');

// Connect to the  Database
mongoose.connect(configDatabase.urlConnection());
console.log("Mongo connect");
// /auth
router.route(API.VERSION + '/login')
    .post(authController.login);

router.post(API.VERSION + '/register',authController.registerAccount);

router.route(API.VERSION + '/user' + "/:user_id")
    .get(authController.userProfile);

router.route(API.VERSION + '/updateUser')
    .post(authController.updateProfileUser);

// Image

router.route(API.VERSION + API.IMAGE_PROFILE + "/:file")
    .get(imageController.getImageProfile);
router.post(API.VERSION + API.IMAGE_PROFILE, uploadImage.single('imageUpload'),
    imageController.postImageProfile);

router.route(API.VERSION + API.IMAGE_TICKET + "/:file")
    .get(imageController.getImageEvent);
    
router.post(API.VERSION + API.IMAGE_TICKET, uploadImage.single('imageUpload'),
    imageController.postImageEvent);

// Export router
module.exports = router;
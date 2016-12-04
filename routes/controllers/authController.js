var User = require('../models/user');
var Event = require('../models/event');
var Transformer = require('../utils/transDataToModel');
var pipoLogger = require('../utils/pipoLogger');
var authService = require('../services/authService');
var authController = function() {
    
    var login = function(req, res) {
        try {
            authService.login(req, res);
        } catch (err) {
            pipoLogger.log(err);
            res.json("Error");
        }

    };

    var userProfile = function(req, res) {
        try {
            User.findById(req.params.user_id, function(err, user) {
                if (err) res.send(err);
                res.json(user);
            });
        } catch (err) {
            pipoLogger.log(err);
            res.json("Error");
        }

    };

    var registerAccount = function(req, res) {
        try {
            // Create a new instance of the User model
            var user = new User();
            // Save the beer and check for errors
            authService.updateUser(req, res, user)
        } catch (err) {
            pipoLogger.log(err);
            res.json("Error");
        }

    };

    var updateProfileUser = function(req, res) {
        try {
            var user = new User()
            Transformer.transDataToUserModel(user, req.body)
                // var phoneNumber = req.body.phoneNumber;
                // var idUser = req.body.idUser;
            user.save(function(err) {
                if (err)
                    res.send(err);
                res.json({
                    status: 200,
                    message: 'User has been updated status',
                    data: user
                });
            });
        } catch (err) {
            pipoLogger.log(err);
            res.json("Error");
        }
    };
    return {
        login: login,
        registerAccount: registerAccount,
        userProfile: userProfile,
        updateProfileUser: updateProfileUser
    }
}();
module.exports = authController;
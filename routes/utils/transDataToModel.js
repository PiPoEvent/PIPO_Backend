var User = require('../models/user');

var transDataToModels = function() {
    var transDataToUserModel = function(user, jsonData) {
      
      var unix = Math.round((new Date()).getTime() / 1000);
      user.createdAt = unix;
      user.phoneNumber = jsonData.phoneNumber;
      user.email = jsonData.email;
      user.password = jsonData.password;
      user.firstname = jsonData.firstname;
      user.lastname = jsonData.lastname;
      user.username = jsonData.username;

      // Profile Image 
      var profileImage = {};
      profileImage["imageUrl"] = jsonData.imageUrl;
      user.profileImage = profileImage;

      // joinedEvent 
      user.joinedEvent = {};
    }
  return {
    transDataToUserModel: transDataToUserModel
  } 
}

module.exports = transDataToModels;


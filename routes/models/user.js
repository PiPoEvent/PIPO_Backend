var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    email: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    createdAt: String,
    phoneNumber: String,
    profileImage: {
        imageUrl: String,
    },
    joinedEvent: []
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

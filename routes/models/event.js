var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	id: String,
	name: String,
	posterPath: {
		imageUrl: String
	},
	descriptionImages: [],
	description: String,
	category: {
		id: String,
		name: String,
		child: []
	},
	location: {
		address: String,
		city: String,
		ward: String,
		longtitude: String,
		latitude: String
	},
	timeBegin: String,
	active: Boolean,
	createdAt: String,
	createdBy: {
		id: String,
		username: String,
		phoneNumber: String,
		profileImage: {
			imageUrl: String
		}
	},
	joiningPeople: []
});
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
	notetitle: {
		type: String,
		required: true
	},
	notetext: {
		type: String,
		required: true
	}
});

const animalSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	species: {
		type: String,
		required: true
	},
	animaltype: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	food: {
		type: String,
		required: true
	},
	habitatreq: {
		type: String,
		required: true
	},
	lastfed: {
		type: Date
	},
	careinstructions: {
		type: String
	},
	notes: {
		type: [notesSchema]
	}
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;

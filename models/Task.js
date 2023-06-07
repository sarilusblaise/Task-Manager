const mongoose = require('mongoose');

//Everything in Mongoose starts with a Schema. Each schema maps to a
//MongoDB collection and defines the shape of the documents within that collection.
//====create schema for task======
const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide name'],
		trim: true,
		maxLength: [20, 'name must be below 20 characters'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});
//A model is a class with which we construct documents.
//are fancy constructors compiled from Schema definitions. An instance of a model is called a document.
//Models are responsible for creating and reading documents from the underlying MongoDB database

module.exports = mongoose.model('Task', taskSchema);

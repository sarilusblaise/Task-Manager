//connect to mongodb atlas database

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
//package for keeping the connection string secret
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware :
app.use(express.static('./public'));
app.use(express.json()); //allow us to have the json body content in our request

// api/v1/tasks is the root route
app.use('/api/v1/tasks', tasks);

// middleware when route does not exist in the screwdriver
app.use(notFound);
app.use(errorHandlerMiddleware);

//app.get(/api/v1/tasks) - get all tasks
//app.post(/api/v1/tasks) - create a new tasks
//app.get(/api/v1/tasks/:id) - get a single task
//app.patch(/api/v1/tasks/:id) - update a tasks
//app.get(/api/v1/tasks/:id) - delete a task

const port = 5000;

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is listening on port ${port} ...`));
	} catch (err) {
		console.error('Error connecting to MongoDB:', err);
	}
};

start();

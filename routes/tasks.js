// all the routes(links) : that means every time a user looking for those links in the browser(make a request), the server gonna response
const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} = require('../controllers/tasks.js');

//set up routes
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

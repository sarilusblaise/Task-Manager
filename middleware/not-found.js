const notFound = (req, res) =>
	res.status(404).send('Ooppps sorry!!! route not found.');

module.exports = notFound;

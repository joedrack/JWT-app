const routeNotFound = (req, res) => res.status(404).send('Route Not Found');

module.exports = routeNotFound;
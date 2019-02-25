const jwt = require('jsonwebtoken')
const config = require('config')
const winston = require('winston')

module.exports = function auth(req, res, next) {
    // User token check
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (error) {
        winston.error(`Authentication error: ${error.message} ...`);
        res.status(400).send(error.message);
    }
}
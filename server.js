const winston = require('winston')
const config = require('config')
const express = require('express')
const app = express()

// Start the server
app.listen(config.ListeningPort, () => {
    winston.info(`Simple Policy Service run and listening on port ${config.ListeningPort} ...`);
});
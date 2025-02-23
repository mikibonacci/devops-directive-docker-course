const { getDateTime } = require('./db'); // db is the db.js file

const express = require('express'); // for building web servers
const morgan = require('morgan'); // for logging http requests

const app = express();
const port = process.env.PORT || 3000;

// setup the logger
// tiny is for a concise format, 
// i.e. ":method :url :status :res[content-length] - :response-time ms".
// alternatively, 'combined' is for the Apache common log format
app.use(morgan('tiny')); 

// Define the routes, i.e. how the server responds to different requests
app.get('/', async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = 'node';
  res.send(response);
});

// this route is a health check, to see if the server is up and running
app.get('/ping', async (_, res) => {
  res.send('pong');
});

// Start the server, and so start to manage the requests, in a way that is 
// defined by the routes above
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.debug('HTTP server closed');
  });
});

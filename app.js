const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');

const route = require('./route');

// node server port
const PORT = 3000;
const app = express();
route.init(app);
app.use(bodyparser.json());
app.use(cookieParser());

const httpServer = http.createServer(app);


// set index
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'err.html'));
});

// bind port
httpServer.listen(PORT, () => {
  console.log(`http start port:${PORT}`);
});

// BUILD YOUR SERVER HERE
const express = require('express');

const server = express();

server.listen(9000, () => {
    console.log('server is now running');
});

module.exports = server; // EXPORT YOUR SERVER instead of {}

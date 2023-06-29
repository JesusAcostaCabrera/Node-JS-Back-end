const http = require('node:http');
const app = require('./app');
const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT,(err) => {
    console.log('Listening on port ',PORT);
})
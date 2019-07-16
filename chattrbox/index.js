const http = require('http');
const send = require('./read');
const wss = require('./websocket-server');

const server = http.createServer((req,res)=>{
    let data = send(req.url,res);
});

server.listen(8008);

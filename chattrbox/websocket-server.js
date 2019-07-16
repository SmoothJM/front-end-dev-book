const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
let port = 8007;
let messages = [];

const ws = new WebSocketServer({
  port:port
});

console.log('websocket server started');

ws.on('connection',socket=>{
  console.log('client connection established');
  //向新连接进来的用户广播历史消息
  messages.forEach(msg=>{
    socket.send(msg);
  });
  //监听新发送的消息
  socket.on('message',data=>{
    messages.push(data);
    ws.clients.forEach(clientSocket=>{
      clientSocket.send(data);
    });
    console.log('Message received: ' + data);
    //socket.send(data);//把收到的数据返回给相同连接的客户端
  });
});

// const https = require('https');
// const fs = require('fs');
// const WebSocket = require('ws');

// //SSL certificates
// // const server = https.createServer({
// //   cert: fs.readFileSync('./cert.pem'),
// //   key: fs.readFileSync('./key.pem')
// // });

// const server = https.createServer(function(request, response) {
// });

// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     console.log(`Received: ${message}`);
//     ws.send(`Echo: ${message}`);
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.on('error', function (e) {
//   // Handle your error here
//   console.log("007 "+e);
// });

// // Start the server
// server.listen(8080, () => {
//   console.log('WebSocket server is running');
// });


// const WebSocket = require('ws');

// // starts server instance on http://localhost:8080
// const wss = new WebSocket.Server({ port: 443 });

// // waits for connection to be established from the client
// // the callback argument ws is a unique for each client
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // runs a callback on message event
//   ws.on('message', (data) => {
//     console.log(`Received message: ${data}`);
//     ws.send(`Server received: ${data}`);

//     // sends the data to all connected clients
//     // wss.clients.forEach((client) => {
//     //     if (client.readyState === WebSocket.OPEN) {
//     //       client.send(data);
//     //     }
//     // });
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });    
// });


// const WebSocket = require('ws')
// const PORT = process.env.PORT || 3000;
// const wss = new WebSocket.Server({ port: PORT })
// wss.on('connection', ws => {
//   console.log('Client connected');

//   ws.on('message', message => {
//     console.log(`Received message => ${message}`);
//   });
//   ws.send('Hello! Message From Server!!');

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });   
// });

// console.log('Websocket running on ws://localhost:8080');

'use strict';
const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));
const server = express()
  .use(express.static('public')) // relative path of client-side code
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = require("socket.io")(server,{
  cors: {
    origins: "*:*",
    methods: ["GET", "POST"]
  }
});
io.on('connection', (socket) => {
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('messaged', (args) => {
    io.emit('message', args);
    console.log(args)
  });
   socket.on('event_name', (...args) => {
    io.emit('message2', args);
     console.log(args)
  });
});
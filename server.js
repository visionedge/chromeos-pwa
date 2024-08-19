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


const WebSocket = require('ws');

// starts server instance on http://localhost:8080
const wss = new WebSocket.Server({ port: 8080 });

// waits for connection to be established from the client
// the callback argument ws is a unique for each client
wss.on('connection', (ws) => {
  console.log('Client connected');

  // runs a callback on message event
  ws.on('message', (data) => {
    console.log(`Received: ${data}`);
    ws.send(`Echo: ${data}`);

    // sends the data to all connected clients
    // wss.clients.forEach((client) => {
    //     if (client.readyState === WebSocket.OPEN) {
    //       client.send(data);
    //     }
    // });

    ws.on('close', () => {
      console.log('Client disconnected');
    });    
  });
});
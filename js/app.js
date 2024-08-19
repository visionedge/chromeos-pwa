// const container = document.querySelector(".container");
// const coffees = [
//   { name: "Perspiciatis", image: "images/coffee1.jpg" },
//   { name: "Voluptatem", image: "images/coffee2.jpg" },
//   { name: "Explicabo", image: "images/coffee3.jpg" }
// ];

// const showCoffees = () => {
//     let output = "";
//     coffees.forEach(
//         ({ name, image }) =>
//         (output += `
//                 <div class="card">
//                     <img class="card--avatar" src=${image} />
//                     <h1 class="card--title">${name}</h1>
//                     <a class="card--link" href="#">Taste</a>
//                 </div>
//                 `)
//     );
//     container.innerHTML = output;
// };
  
// document.addEventListener("DOMContentLoaded", showCoffees);


// document.addEventListener('DOMContentLoaded', () => {
//   const output = document.getElementById('output');
//   //const ws = new WebSocket('https://wss-01mg.onrender.com');
//   const ws = new WebSocket('ws://localhost:8080');

//   console.log(ws);

//   ws.onopen = () => {
//     output.innerHTML += '<p>Connected to server</p>';
//   };

//   ws.onmessage = (event) => {
//     output.innerHTML += `<p>Server: ${event.data}</p>`;
//   };

//   ws.onclose = () => {
//     output.innerHTML += '<p>Disconnected from server</p>';
//   };

//   ws.onerror = (error) => {
//     console.error('WebSocket error:', error);
//     output.innerHTML += '<p>Error connecting to server</p>';
//   };

//   window.sendMessage = () => {
//     const input = document.getElementById('messageInput');
//     if (ws.readyState === WebSocket.OPEN) {
//       ws.send(input.value);
//       output.innerHTML += `<p>You: ${input.value}</p>`;
//       input.value = '';
//     } else {
//       output.innerHTML += '<p>Error: WebSocket is not open</p>';
//     }
//   };
// });

const connection = new WebSocket("ws://localhost:8080");
const button = document.querySelector("#send");

connection.onopen = (event) => {
    console.log("WebSocket is open now.");
};

connection.onclose = (event) => {
    console.log("WebSocket is closed now.");
};

connection.onerror = (event) => {
    console.error("WebSocket error observed:", event);
};

connection.onmessage = (event) => {
  // append received message from the server to the DOM element 
  const chat = document.querySelector("#chat");
  chat.innerHTML += event.data;
};

button.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  const data = `<p>${name.value}: ${message.value}</p>`;

  // Send composed message to the server
  connection.send(data);

  // clear input fields
  name.value = "";
  message.value = "";
}); 
#! /usr/bin/env node

const webSocket = require("ws");
const readline = require("readline");

const server = new webSocket.Server({ port: 8001 });

let connectedClients = [];

server.on("connection", (socket) => {
    console.log("\x1b[32m%s\x1b[0m", "Cliente Conectado!");

    connectedClients.push(socket);
    console.log(`Clientes conectados: ${connectedClients.length}`);

    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === "public") {
            console.log(`\x1b[33mMensaje público recibido: ${parsedMessage.message}\x1b[0m`);

            broadcastMessage(parsedMessage.message);
        } else if (parsedMessage.type === "private") {
            console.log(`\x1b[36mMensaje privado recibido del cliente: ${parsedMessage.message}\x1b[0m`);

            socket.send(JSON.stringify({ type: "private", message: "Tu mensaje privado ha sido recibido" }));
        }
    });

    socket.on("close", () => {
        console.log("\x1b[31m%s\x1b[0m", "Cliente desconectado");

        connectedClients = connectedClients.filter((client) => client !== socket);
        console.log(`Clientes conectados: ${connectedClients.length}`);
    });
});

function broadcastMessage(message) {
    connectedClients.forEach((client) => {
        if (client.readyState === webSocket.OPEN) {
            client.send(JSON.stringify({ type: "public", message }));
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(`\x1b[32m\nMensaje del servidor: ${input}\x1b[0m`);
    broadcastMessage(input);
});

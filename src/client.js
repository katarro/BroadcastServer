const webSocket = require("ws");

const socket = new webSocket("ws://localhost:8001");

socket.on("open", () => {
    console.log("\x1b[32m%s\x1b[0m", "Conectado al servidor de WebSocket");

    process.stdout.write("\x1b[34mEscribe un mensaje (público o privado): \x1b[0m");
    process.stdin.on("data", (data) => {
        const input = data.toString().trim();

        if (input.startsWith("/private ")) {
            const privateMessage = input.replace("/private ", "");
            socket.send(JSON.stringify({ type: "private", message: privateMessage }));
        } else {
            socket.send(JSON.stringify({ type: "public", message: input }));
        }

        process.stdout.write("\x1b[34mEscribe un mensaje (público o privado): \x1b[0m");
    });
});

socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "public") {
        console.log(`\x1b[33m\nMensaje público del servidor: ${parsedMessage.message}\x1b[0m`);
    } else if (parsedMessage.type === "private") {
        console.log(`\x1b[36m\nMensaje privado del servidor: ${parsedMessage.message}\x1b[0m`);
    }
});

socket.on("close", () => {
    console.log("\x1b[31mConexión cerrada :C\x1b[0m");
});

socket.on("error", (error) => {
    console.error(`\x1b[31mError: ${error.message}\x1b[0m`);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello ZAAAWorld!');
});

app.listen(port, () => {
    console.log(`Si suuuuuuuuuu ${port}`);
});

function stopServer() {
    Server.close(() => {
        console.log("Le serveur est arrêté");
        process.exit(0);
    });
}

process.stdin.resume();
process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);
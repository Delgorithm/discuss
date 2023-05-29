const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
} else {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
}

app.listen(port);
console.log('Server started at http://localhost:' + port);


// Stop the server when needed
function stopServer() {
    Server.close(() => {
        console.log("Le serveur est arrêté");
        process.exit(0);
    });
}

process.stdin.resume();
process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);
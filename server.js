const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');


const upload = multer();
const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ------------ START : INSCRIPTION FORM V1 ---------------- //

app.get('/html/account.html', (req, res) => {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static('public'));

app.post('/html/account.html', (req, res) => {
    const pseudo = req.body.pseudonym;
    const password = req.body.password;
    res.sendFile(path.join(__dirname, 'public/html/profil.html'));
});

// ------------ END : INSCRIPTION FORM V1 ---------------- //


// Ecouter le port
app.listen(PORT, () => console.log(`Server listening on port: http://localhost:${PORT}`));
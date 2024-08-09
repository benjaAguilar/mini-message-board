const express = require('express');
const path = require('node:path');
const app = express();

const indexRoute = require('./routes/indexRoute');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
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

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => console.log(`server running at  port ${PORT}`));
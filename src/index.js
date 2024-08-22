const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const sass = require('sass');
const app = express();
const port = 3004;

//STATIC FILE
app.use(express.static(path.join(__dirname, 'public')));

//HTTP LOGGER 
app.use(morgan('combined'));

//TEMPLATE ENGINE
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => console.log(`Example app lisening at http://localhost:${port}`));
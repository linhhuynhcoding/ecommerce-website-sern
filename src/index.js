const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3004;

//HTTP LOGGER 
app.use(morgan('combined'));

//TEMPLATE ENGINE
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Example app lisening at http://localhost:${port}`));
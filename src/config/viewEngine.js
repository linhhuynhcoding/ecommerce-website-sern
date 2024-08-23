import express from 'express';

let configViewEngine = (app) => {
    //STATIC FILE
    app.use(express.static('./src/public'));

    app.set('view engine', 'ejs');
    app.set('views', './src/resources/views');
}

module.exports = configViewEngine;
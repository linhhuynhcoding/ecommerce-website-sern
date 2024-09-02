import express from 'express';
import expressLayouts from 'express-ejs-layouts';

let configViewEngine = (app) => {
    //STATIC FILE
    app.use(express.static('./src/public'));

    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    app.set('layout', './layouts/main');    
    app.set('views', './src/resources/views');
}

module.exports = configViewEngine;
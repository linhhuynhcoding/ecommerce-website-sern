import express from 'express';
import morgan from 'morgan';
import viewEngine from './config/viewEngine';

import {initSession} from './middlewares/Session'
import initWebRoutes from './routes/web';
import connectDB from './config/connectDB';
import cors from 'cors';
import session from 'express-session'
import cookieParser from 'cookie-parser'


require('dotenv').config();

const app = express();
const port = process.env.PORT_BACKEND || 8080;

app.use(cors({ 
    origin: `${process.env.URL_FRONTEND}:${process.env.PORT_FRONTEND}`  ,
    methods:['GET','POST','PUT','DELETE'],
    credentials: true, 
}));

//HTTP LOGGER 
app.use(morgan('combined'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser())

initSession(app);
viewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => console.log(`Example app lisening at http://localhost:${port}`));
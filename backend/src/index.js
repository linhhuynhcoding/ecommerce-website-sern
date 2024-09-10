import express from 'express';
import morgan from 'morgan';
import viewEngine from './config/viewEngine';

import {initSession} from './middlewares/Session'
import initWebRoutes from './routes/web';
import connectDB from './config/connectDB';
import cors from 'cors';
import session from 'express-session'


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ credentials: true, origin: true }));

//HTTP LOGGER 
app.use(morgan('combined'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

initSession(app);
viewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => console.log(`Example app lisening at http://localhost:${port}`));
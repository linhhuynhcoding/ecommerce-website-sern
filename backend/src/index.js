import express from 'express';
import morgan from 'morgan';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import connectDB from './config/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//HTTP LOGGER 
app.use(morgan('combined'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

viewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => console.log(`Example app lisening at http://localhost:${port}`));
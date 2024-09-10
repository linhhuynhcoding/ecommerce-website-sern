import db from '../models/index'
import {initSessionStorage} from './../middlewares/Session'
class HomeController {
    home = async (req, res) => {
        
        return res.render('homeAdmin', {title: 'HOME',});
    }       
    index = async (req, res) => {
        try {
        } catch (error) {            
        }
        return res.render('crud', {title: 'CRUD',});
    }       
    post_crud = async (req, res) => {
        try {
        } catch (error) {            
        }
        console.log(req.body);
        return res.send("hi");
        return res.render('post_crud', {title: 'POST CRUD',});
    }       
    createCookies = async (req, res) => {
        console.log(`sessionID: ${req.session.id}`)
        // initSessionStorage(req, res, null);
        // res.setHeader('Content-Type', 'text/html');
        res.setHeader('Set-Cookie', 'test=value;max-Age=3600;Path="/";');


        return res.status(200).json(req.session);
    }
    
}

module.exports = new HomeController;
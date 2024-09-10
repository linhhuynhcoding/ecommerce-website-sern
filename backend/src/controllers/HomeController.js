import db from '../models/index'
import {initSessionStorage} from './../middlewares/Session'
class HomeController {
      
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
    home = async (req, res) => {
        console.log(`sessionID: ${req.session.id}`)
        // initSessionStorage(req, res, null);
        // res.setHeader('Content-Type', 'text/html');
        // res.setHeader('Set-Cookie', 'test=value;max-Age=3600;Path="/";');
        if (req.session.authenticated === true) {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'OK',
                user: req.session.user['username'] ?? null,
            });    
        }
        else {
            return res.status(401).json({
                errCode: 1,
                errMessage: 'Can not Authenticated',
            });    

        }
    }
    
}

module.exports = new HomeController;
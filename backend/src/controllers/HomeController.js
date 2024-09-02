import db from '../models/index'
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
}

module.exports = new HomeController;
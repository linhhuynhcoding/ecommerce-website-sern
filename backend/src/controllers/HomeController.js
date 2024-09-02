import db from '../models/index'
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
}

module.exports = new HomeController;
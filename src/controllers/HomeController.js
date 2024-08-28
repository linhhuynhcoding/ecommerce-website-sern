import db from '../models/index'
class HomeController {
    index = async (req, res) => {
        try {
        } catch (error) {            
        }
        return res.render('crud', {title: 'CRUD',});
    }       
}

module.exports = new HomeController;
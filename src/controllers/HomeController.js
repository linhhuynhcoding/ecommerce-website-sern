import db from '../models/index'
class HomeController {
    index = async (req, res) => {
        try {
        } catch (error) {            
        }
        return res.render('home', {title: 'Home',});
    }       
}

module.exports = new HomeController;
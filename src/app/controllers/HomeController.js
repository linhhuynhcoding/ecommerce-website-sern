class HomeController {
    index (req, res) {
        return res.render('home', {title: 'Home',});
    }       
}

module.exports = new HomeController;
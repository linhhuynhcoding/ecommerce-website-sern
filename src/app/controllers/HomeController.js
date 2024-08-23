class HomeController {
    index (req, res) {
        return res.send("Hi Linh !!!");
    }       
}

module.exports = new HomeController;
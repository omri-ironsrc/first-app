let homeController = {
    home: (req, res) => {
        console.log('homeController.home')
        res.redirect('/views/home.html')
    }
}

module.exports = homeController
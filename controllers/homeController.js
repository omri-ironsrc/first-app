let homeController = {
    home: (req, res) => {
        console.log('-- home --')
        res.redirect('/views/home.html')
    }
}

module.exports = homeController
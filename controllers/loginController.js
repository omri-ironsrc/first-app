let loginController = {
    loginHome: (req, res) => {
        res.redirect('/views/login.html')
    },
    login: (req, res) => {
        console.log('LoginController.login')
        req.session.regenerate(function () {
            req.session.user = req.body.user
            req.session.save(function (error) {
                if (error) return next(error)
                res.redirect('/views/users.html')
            })
        })
    }
}

module.exports = loginController
let loginController = {
    loginHome: (req, res) => {
        console.log('-- loginHome --')
        res.redirect('/views/login.html')
    },
    login: (req, res) => {
        console.log('-- login --')
        req.session.regenerate(function () {
            req.session.user = req.body.user
            req.session.users = [req.session.user]
            req.session.save(function (error) {
                if (error) return next(error)
                res.render('users', {
                    users: req.session.users,
                    display: 'none',
                    message: null
                })
            })
        })
    }
}

module.exports = loginController
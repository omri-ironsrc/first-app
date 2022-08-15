let userController = {
    getAllUsers: (req, res) => {
        console.log('-- getAllUsers --')
        res.render('users', {
            users: req.session.users,
            display: 'none',
            message: ''
        })
    },
    addNewUser: (req, res) => {
        console.log('-- addNewUser --')
        req.session.reload(function () {
            let message = 'user already exists'
            let display = 'none'

            if (req.session.users) {
                if (req.session.users.indexOf(req.body.user) === -1) {
                    req.session.users.push(req.body.user)
                } else {
                    display = null
                }
            }

            saveSession(req, res, req.session.users, display, message)
        })
    },
    deleteUser: (req, res) => {
        console.log('-- deleteUser --')
        req.session.reload(function () {
            let message = 'user not exists'
            let display = 'none'

            if (req.session.users) {
                if (req.session.users.indexOf(req.query.user) !== -1) {
                    req.session.users = req.session.users.filter(user => user !== req.query.user)
                } else {
                    display = null
                }
            }

            saveSession(req, res, req.session.users, display, message)
        })
    }
}

function saveSession(req, res, users, display, message) {
    req.session.save(function (error) {
        if (error) return next(error)
        res.render('users', {
            users: users,
            display: display,
            message: message
        })
    })
}

module.exports = userController
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
        req.session.reload(function () {
            let message
            let display = 'none'

            if (req.session.users && req.body.user) {
                const user = req.body.user.substring(0, req.body.user.indexOf(':'))

                if (req.body.user.includes('add')) {
                    console.log('-- addNewUser --')

                    if (req.session.users.indexOf(user) === -1) {
                        req.session.users.push(user)
                    } else {
                        display = null
                        message = 'user already exists'
                    }
                } else {
                    console.log('-- deleteUser --')

                    if (req.session.users.indexOf(user) !== -1) {
                        req.session.users = req.session.users.filter(element => element !== user)
                    } else {
                        display = null
                        message = 'user not exists'
                    }
                }
            }

            req.session.save(function (error) {
                if (error) return next(error)
                res.render('users', {
                    users: req.session.users,
                    display: display,
                    message: message
                })
            })
        })
    }
}

module.exports = userController
let userController = {
    getAllUsers: (req, res) => {
        console.log('userController.getAllUsers')
        res.render('users', {users: req.session.users})
    },
    addNewUser: (req, res) => {
        console.log('userController.addNewUser')
        req.session.reload(function () {
            let message = 'User is already exists'
            let display = 'none'

            if (req.session.users) {
                if (req.session.users.indexOf(req.body.user) === -1) {
                    req.session.users.push(req.body.user)
                } else {
                    display = null
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
    },
    deleteUser: (req, res) => {
        console.log('userController.deleteUser')
        req.session.reload(function () {
            let message = 'user not exists'
            let display = 'none'

            console.log(req.session.superuser)
            // if (!req.session.superuser) {
            //     message = 'you are not allowed to delete users'
            //     display = null
            // } else {
            //
                if (req.session.users) {
                    if (req.session.users.indexOf(req.query.user) !== -1) {
                        console.log('if')
                        req.session.users = req.session.users.filter(user => user !== req.query.user)
                    } else {
                        console.log('else')
                        display = null
                    }

                }
            // }

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
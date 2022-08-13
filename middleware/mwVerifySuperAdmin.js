const mwVerifySuperAdmin = (req, res, next) => {
    const verifiedUsers = ['superadmin']
    console.log('mwVerifySuperAdmin')

    if (verifiedUsers.indexOf(req.session.user.toLowerCase()) !== -1) {
        next()
    } else {
        res.sendStatus(401)
    }
}

module.exports = mwVerifySuperAdmin

        // res.render('users', {
        //     users: req.session.users,
        //     display: '',
        //     message: 'you are not allowed to delete users'
        // })

    // req.session.reload(function () {
    //     req.session.superuser = verifiedUsers.indexOf(req.session.user) !== -1
    //     console.log('mw ', req.session.superuser)
    //     req.session.save(function (error) {
    //         if (error) return next(error)
    //     })
    // })
    // next()
    // console.log('req.session.user: ' + verifiedUsers.indexOf(req.session.user))
    // if (verifiedUsers.indexOf(req.session.user) === -1) {
    //     console.log('njknjknjkbjkb')
    //     res.render('users', {
    //         users: req.session.users,
    //         display: '',
    //         message: 'you are not allowed to delete users'
    //     })
    // } else {
    //     next()

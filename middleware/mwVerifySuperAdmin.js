const mwVerifySuperAdmin = (req, res, next) => {
    const verifiedUsers = ['superadmin']
    console.log('mwVerifySuperAdmin')

    if (verifiedUsers.indexOf(req.session.user.toLowerCase()) !== -1) {
        next()
    } else {
        console.log('You are allowed to delete users')
        res.status(401).send({message: 'You are allowed to delete users'})
    }
}

module.exports = mwVerifySuperAdmin

const mwVerifySuperAdmin = (req, res, next) => {
    const verifiedUsers = ['superadmin']
    console.log('-- mwVerifySuperAdmin --')

    if (verifiedUsers.indexOf(req.session.user.toLowerCase()) !== -1) {
        next()
    } else {
        res.status(401).send({message: 'You are allowed to delete users'})
    }
}

module.exports = mwVerifySuperAdmin
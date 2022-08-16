const verifySuperadmin = (req, res, next) => {
    const verifiedUsers = ['superadmin']
    console.log('-- verifySuperadmin --')

    if (req.body.user.includes('delete')) {
        if (verifiedUsers.indexOf(req.session.user.toLowerCase()) !== -1) {
            next()
        } else {
            res.status(401).send({message: 'You are allowed to delete users'})
        }
    }

    next()
}

module.exports = verifySuperadmin
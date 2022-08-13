const mwVerifyAdmin = (req, res, next) => {
    const verifiedUsers = ['admin', 'superadmin']
    console.log('mwVerifyAdmin')

    if (verifiedUsers.indexOf(req.body.user.toLowerCase()) !== -1) {
        next()
    } else {
        res.sendStatus(401)
    }
}

module.exports = mwVerifyAdmin
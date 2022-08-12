const mwVerifyAdmin = (req, res, next) => {
    const verifiedUsers = ['admin', 'Admin']
    console.log('mwVerifyAdmin')

    if (verifiedUsers.indexOf(req.body.user) !== -1) {
        next()
    } else {
        res.render('person', {content: req.body.user})
    }
}

module.exports = mwVerifyAdmin
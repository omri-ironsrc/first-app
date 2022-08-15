const verifyAdmin = (req, res, next) => {
    const verifiedUsers = ['admin', 'superadmin']
    console.log('-- verifyAdmin --')

    if (verifiedUsers.indexOf(req.body.user.toLowerCase()) !== -1) {
        next()
    } else {
        res.status(401).send({message: 'You are not supposed to be here'})
    }
}

module.exports = verifyAdmin
const printSession = (req, res, next) => {
    console.log(req.session)
    next()
}

module.exports = printSession
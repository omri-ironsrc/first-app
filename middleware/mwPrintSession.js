const mwPrintSession = (req, res, next) => {
    console.log(req.session)
    next()
}

module.exports = mwPrintSession


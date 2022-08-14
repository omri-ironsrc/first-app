const mwTimestamp = (req, res, next) => {
    console.log(new Date().toLocaleString() + ' | ' + req.url)
    next()
}

module.exports = mwTimestamp
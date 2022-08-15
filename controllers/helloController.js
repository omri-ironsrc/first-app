let helloController = {
    hello: (req, res) => {
        console.log('-- hello --')
        res.redirect('/views/hello.html')
    }
}

module.exports = helloController
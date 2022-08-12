let helloController = {
    hello: (req, res) => {
        console.log('helloController.hello')
        res.redirect('/views/hello.html')
    }
}

module.exports = helloController
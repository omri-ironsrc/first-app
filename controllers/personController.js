let personController = {
    helloPerson: (req, res) => {
        console.log('personController.helloPerson')
        let content = req.query.name !== undefined ? req.query.name : 'You'
        res.render('person', {content: content})
    }
}

module.exports = personController
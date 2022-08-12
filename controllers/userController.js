let userController = {
    getAllUsers: (req, res) => {
        console.log('userController.getAllUsers')
        res.redirect('views/users.html')
        // return res.render('index', {content: JSON.stringify(req.session.user)});
    },
    addNewUser: (req, res) => {
        console.log('userController.addNewUser')
        return res.json({'message': 'adding a user'})
    },
    deleteUser: (req, res) => {
        console.log('userController.deleteUser')
        return res.json({'message': 'deleting a user'})
    }
}

module.exports = userController
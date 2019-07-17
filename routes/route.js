var User = require('./users.js');

module.exports = app => {
    app.get('/', function (req, res) {
        res.send([{
            user: 'joker'
        }]);
    });
    app.use('/users', User.login);
}
var express = require('express');
var router = express.Router();
var dbModels = require('./../data/models');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
    var user = new dbModels.User({
        username: 'test',
        email: 'test@test.com',
        passwordHash: 'e10adc3949ba59abbe56e057f20f883e1',
        firstname: 'test',
        lastname: 'test',
        sex: 1,
        birthDate: new Date(1995, 04, 23),
        dateCreated: new Date(2017, 08, 05)
    });

    user.save(function (err) {
        if (err) {
            console.log(err);
        }

        console.log('user created');
    })
});

module.exports = router;
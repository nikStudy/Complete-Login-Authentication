const router = require('express').Router();
const checkAuth = require('../middleware/check-auth');


router.get('/', checkAuth, (req, res) => {
    // res.render('profile', { user: req.user });
    res.send({user: req.userData, success: true});
});


module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    if (!req.session.user) {
        res.redirect('/auth/login');
      } else {
        res.render('pages/home',{username: req.session.user,title: 'Home'});
    }
    


   
});


module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('pages/login',{ layout: false });
});

router.post('/login', (req, res) => {
    // console.log(req.body);
    // res.send('login');

    if (req.body.username === 'admin' && req.body.password === 'admin') {
        req.session.user = "admin"; 
        
       res.redirect('/');
    }else {
        res.render('pages/login', {error: 'Username or password is incorrect', layout: false});
    }

});

router.get('/logout', async (req, res) => {
    // destroy all session
    req.session.destroy();
  
    // redirect to login
    res.redirect('/auth/login');
  });
  

module.exports = router;
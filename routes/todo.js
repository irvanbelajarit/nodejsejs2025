const express = require('express');

const router = express.Router();

const Member = require('../model/member');

router.get('/', (req, res) => {

    if (!req.session.user) {
        res.redirect('/auth/login');
      } else {
        Member.find().then((result) => {
            res.render('pages/todo', {username: req.session.user, title: 'Todo', members: result});
        }).catch((error) => {
            console.log(error);
        });
    }
  
});

router.get('/add', (req, res) => {
    if (!req.session.user) {
        res.redirect('/auth/login');
      } else {
        res.render('pages/tambahdata',{username: req.session.user,title: 'Add Member'});
    }
});

router.post('/', (req, res) => {
    const member = new Member(req.body);
    member.save().then((result) => {
        console.log(result);
        res.redirect('/todo');
    }).catch((error) => {
        console.log(error);
    });
}
);

router.get('/edit/:id', (req, res) => {
    if (!req.session.user) {
        res.redirect('/auth/login');
      } else {
        Member.findById(req.params.id).then((result) => {
            res.render('pages/editdata', {username: req.session.user, title: 'Edit Member', m: result});
        }).catch((error) => {
            console.log(error);
        });
    }
});


router.post('/update', (req, res) => {
    Member.findByIdAndUpdate(req.body.id, req.body).then((result) => {
        console.log(result);
        res.redirect('/todo');
    }).catch((error) => {
        console.log(error);
    });
});

router.get('/delete/:id', (req, res) => {
    if (!req.session.user) {
        res.redirect('/auth/login');
      } else {
        Member.findByIdAndDelete(req.params.id).then((result) => {
            console.log(result);
            res.redirect('/todo');
        }).catch((error) => {
            console.log(error);
        });
    }
});

module.exports = router;
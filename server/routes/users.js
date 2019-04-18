const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.send("Signup endpoint");
})

router.post('/register', (req, res) => {
    const { name, email, number, password, confirmPassword } = req.body;

    if (!name || !email || !number || !password || !confirmPassword) {
        console.log("Error: Enter all fields");
    }

    if( password !== confirmPassword ) {
        console.log("Error: Passwords do not match")
    }

    User.findOne ({ email: email }).then(user => {
        if(user) {
            console.log("User already registered");
        }
        else {
            const newUser = new User({
                name,
                email,
                number,
                password
            });

            bcrypt.genSalt(5, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) {
                        console.log(`Bcrypt error: ${err}`);
                    }
                    else {
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                console.log(`Successfully registered ${user}`);
                                res.send({ redirect: true })
                            })
                            .catch(err => console.log(err));
                    }
                });
            });
        }
    })

});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: '/',
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send("You have logged out");
});

module.exports = router;
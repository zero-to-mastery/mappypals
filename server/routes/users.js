const express = require('express');
const router = express.Router();
const User = require('../models/User');

const bcrypt = require('bcryptjs');
const async = require('async');
const nodemailer = require('nodemailer');
const crypto = require('crypto');


//Register Routes
router.get('/register', (req, res) => {
    res.send("Signup endpoint");
})

router.post('/register', (req, res) => {
    const { name, lastname, email, password, confirmPassword } = req.body;

    if (!name || !lastname || !email  || !password || !confirmPassword) {
        console.log("Error: Enter all fields");
    }

    if( password !== confirmPassword ) {
        console.log("Error: Passwords do not match")
    }

    User.findOne ({ email }).then(user => {
        if(user) {
            console.log("User already registered");
        }
        else {
            const newUser = new User({
                name,
                lastname,
                email,
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
                                res.status(200).json({ redirect: true})
                            })
                            .catch(err => console.log(err));
                    }
                });
            });
        }
    })
/*   if(redirect) {
        res.json(200, { redirect: true })
    }*/
});


//Login Routes
router.post('/login', (req, res) => {
    const { email, password} = req.body;
    User.findOne({ email }, function(err, user) {
        if(err) {
            console.log(err);
            res.status(500).json({ error: 'Internal error' })
        }
        else if (!user) {
            res.status(401).json({ error: 'Incorrect email or password' })
        }
        else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ error: 'Internal error' })
                }
                if (!isMatch) {
                    res.status(401).json({ error: 'Incorrect email or password' }) 
                } else {
                    user.lastLogin = Date.now()
                    user.save();
                    res.status(200).json({ redirect: true })
                }
            });
        }
    })
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send("You have logged out");
});

//Forgot Password Routes
router.get('/reset', (req, res) => {
    res.send("Endpoint reached");
});

router.post("/reset", (req, res, next) => {
    const { email } = req.query;

    async.waterfall([
        (done) => {
            crypto.randomBytes(20, (err, code) => {
                let token = code.toString('hex');
                done(err, token);
            });
        },

        (token, done) => {
            User.findOne({ email }, function(err, user) {
                if(!user) {
                    console.log("No user of associated to this email");
                }
                user.resetPassToken = token;
                // 1 Hour valid
                user.resetPassExp = Date.now() + 3600000
                user.save(function(err) {
                    done(err, token, user);
                });
            });
        },

        async(token, user, done) => {
            let testAccount = await nodemailer.createTestAccount();

            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass // generated ethereal password
                }
            });

            let info = await transporter.sendMail({
                from: '"MappyPals" <mappypals@gmail.com>',
                to: user.email,
                subject: 'Reset Password',
                text:   'You are receiving this because you(or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://' + req.headers.host + '/users/reset/' + token + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            });
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
    ]);
});

//Deal with the reset token

router.get('/reset/:token', (req, res) => {

    User.findOne({ resetPassToken: req.params.token, resetPassExp: { $gt: Date.now() }}, (err, user) => {
        if(!user) {
            res.send('Password Reset Token is invalid or expired.')
        }
        res.send('Enter your new password');
    });
});

router.post('/reset/:token', (req, res) => {

    async.waterfall([
        (done) => {
            User.findOne({ resetPassToken: req.params.token, resetPassExp: { $gt: Date.now() }}, (err, user) => {
                if(!user) {
                    res.send('Password Reset Token is invalid or expired.')
                }
                else if( req.query.pass === req.query.confirm) {
                    bcrypt.genSalt(5, (err, salt) => {
                        bcrypt.hash(req.query.pass, salt, (err, hash) => {
                            if (err) {
                                console.log(`Bcrypt error: ${err}`);
                            }
                            else {
                                user.password = hash;
                                user.save()
                                    .then(user => {
                                        console.log(`Successfully updated ${user}`);
                                        res.status(200).json({ redirect: true })
                                    })
                                    .catch(err => console.log(err));
                            }
                        });
                    });
                }
            });
        }
    ]);
})

module.exports = router;
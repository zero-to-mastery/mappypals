const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Passport strategy we are using. Add new ones (fb, google) below this
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    passport.use( new LocalStrategy(
        function( email, password, done) {
            User.findOne({ email: email}, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
                return done(null, user);
            })
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
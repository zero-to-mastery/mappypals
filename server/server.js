//Should be server.js but since we are not allowed to delete other people's code, a new file.

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// CORS
app.use(cors());

// Body parser    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const index = require('./routes/index.js');
const users = require('./routes/users.js');

// While adding fb or any other auth, make changes to this file
require('./config/passport')(passport);

// DB config
const db = require('./config/db').mongoURI;

mongoose.connect( db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use('/', index);
app.use('/users', users);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server started on port ${PORT}`));
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import Signup from '../pages/Login/Signup';
import ForgotPassword from '../pages/Login/ForgotPassword';
import ResetPassword from '../pages/Login/ResetPassword';
import ProfileSettings from '../pages/Settings/ProfileSettings/ProfileSettings';
import SettingsEmailPassword from '../pages/Settings/SettingsEmailPassword/SettingsEmailPassword';
import FriendsList from '../pages/FriendsList/FriendsList';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/friendslist" component={FriendsList} />
            <Route path="/resetpassword" component={ResetPassword} /> *
            <Route
                path="/settings/profilesettings"
                component={ProfileSettings}
            />
            <Route
                path="/settings/email_&_password"
                component={SettingsEmailPassword}
            />
        </Switch>
    </main>
);

export default Main;

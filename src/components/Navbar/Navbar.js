import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';
import Button from '../UI/Button/Button';
import { ReactComponent as AboutUs } from '../../pics/AboutUs.svg';
import { ReactComponent as Logo } from '../../pics/Logo.svg';
import { ReactComponent as Team } from '../../pics/Team.svg';
import { ReactComponent as Friends } from '../../pics/FriendsIcon.svg';
import { ReactComponent as Invite } from '../../pics/InviteFriends.svg';
import { ReactComponent as Settings } from '../../pics/MySettingsIcon.svg';
import { userSignOut } from '../../store/actions/user';
import {
    showInviteFriends,
    hideInviteFriends
} from '../../store/actions/modals';
const VISIBILITY = { hidden: 'hidden', visible: 'visible' };

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navRef = React.createRef();

        this.state = {
            hamburger: '',
            navbar: '',
            navbarRight: '',
            navbarWidth: '',
            settingsDropdown: false
        };
    }
    showNav = () => {
        if (
            this.state.navbarWidth.length &&
            this.state.navbarWidth.includes('%')
        ) {
            const percent = this.state.navbarWidth.split('%')[0] / 100;
            const calc = window.innerWidth * percent;
            this.setState({ navbarWidth: calc });
        }
        if (this.state.hamburger.length) {
            if (this.state.navbar === VISIBILITY.hidden)
                this.setState({
                    navbar: VISIBILITY.visible,
                    navbarRight: this.state.navbarWidth * 1 + 10 + 'px'
                });
            else this.setState({ navbar: VISIBILITY.hidden, navbarRight: '' });
        }
    };
    componentDidMount() {
        // node = id="nav-bar"
        let node = this.navRef.current;
        let navWidth;

        // If id="nav-bar" exist  navWidth = navbar width.
        if (node) {
            navWidth = window.getComputedStyle(node).width.split('px')[0];
        }

        // if id = "nav-bar exist and navWidth is not equal to this.state.navbarWidth"
        if (node && navWidth !== this.state.navbarWidth) {
            this.setState({ navbarWidth: navWidth });
        }

        if (
            window.innerWidth <= 900 ||
            (window.screen.orientation.angle > 0 && window.innerWidth < 900)
        ) {
            this.setState({ hamburger: 'block', navbar: VISIBILITY.hidden });
        } else {
            this.setState({ hamburger: '', navbar: '' });
        }
        window.addEventListener('resize', () => {
            if (
                ((window.screen.orientation.angle === '90' &&
                    window.innerWidth < 900) ||
                    window.innerWidth < 900) &&
                !this.state.hamburger.length
            ) {
                this.setState({
                    hamburger: 'block',
                    navbar: VISIBILITY.hidden
                });
            } else if (
                window.innerWidth >= 900 &&
                this.state.hamburger.length
            ) {
                this.setState({ hamburger: '', navbar: VISIBILITY.visible });
                node = this.navRef.current;
            }
            if (node) {
                navWidth = window.getComputedStyle(node).width.split('px')[0];
            }
            if (node && navWidth !== this.state.navbarWidth) {
                this.setState({ navbarWidth: navWidth });
                this.showNav();
            }
        });

        window.addEventListener('orientationchange', () => {
            if (
                ((window.screen.orientation.angle === '90' &&
                    window.innerWidth < 900) ||
                    window.innerWidth < 900) &&
                !this.state.hamburger.length
            )
                this.setState({
                    hamburger: 'block',
                    navbar: VISIBILITY.hidden
                });
            else if (window.innerWidth >= 900 && this.state.hamburger.length)
                this.setState({ hamburger: '', navbar: VISIBILITY.visible });
            node = this.navRef.current;
            if (node)
                navWidth = window.getComputedStyle(node).width.split('px')[0];
            if (node && navWidth !== this.state.navbarWidth) {
                this.setState({ navbarWidth: navWidth });
                this.showNav();
            }
        });
    }
    toggleSettingsNavbar = () =>
        this.setState({ settingsDropdown: !this.state.settingsDropdown });

    render() {
        const {
            userSignOut,
            hideInviteFriends,
            showInviteFriends,
            logged
        } = this.props;

        let settingsNavbar = '';
        if (this.state.settingsDropdown & (window.innerWidth > 900)) {
            settingsNavbar = (
                <div className="nav-item settings-navbar">
                    <Link to="/settings/profilesettings">
                        <p
                            className="setting-navbar-item  u-border-bottom"
                            onClick={() => {
                                this.toggleSettingsNavbar();
                                hideInviteFriends();
                            }}
                        >
                            Profile Settings
                        </p>
                    </Link>

                    <Link to="/settings/email_&_password">
                        <p
                            className="setting-navbar-item"
                            onClick={this.toggleSettingsNavbar}
                        >
                            Password and Email
                        </p>
                    </Link>
                </div>
            );
        }
        let settings = (
            <div
                className="nav-item setting-item"
                onClick={this.toggleSettingsNavbar}
            >
                {' '}
                <Settings /> <p>SETTINGS</p>
            </div>
        );
        if (window.innerWidth < 900) {
            settings = (
                <div className="nav-item setting-item">
                    <Link to="/settings/profilesettings">
                        {' '}
                        <Settings /> <p>SETTINGS</p>
                    </Link>
                </div>
            );
        }
        return (
            <React.Fragment>
                {this.state.hamburger.length ? (
                    <div
                        className="hamburger"
                        onClick={this.showNav}
                        style={{ right: this.state.navbarRight }}
                    >
                        <span className="hamburger-icon">☰</span>
                    </div>
                ) : (
                    ''
                )}
                {logged ? (
                    <div
                        id="nav-bar"
                        ref={this.navRef}
                        style={{ visibility: this.state.navbar }}
                    >
                        <div
                            className="item-wrapper"
                            onClick={() => {
                                this.showNav();
                                hideInviteFriends();
                            }}
                        >
                            <Link className="nav-item" to="/">
                                {' '}
                                <Logo height="50px" /> <p>MappyPals</p>{' '}
                            </Link>
                        </div>

                        <div
                            className="item-wrapper"
                            onClick={() => {
                                this.showNav();
                                hideInviteFriends();
                            }}
                        >
                            <Link className="nav-item" to="/friendslist">
                                {' '}
                                <Friends /> <p>FRIENDS</p>{' '}
                            </Link>
                        </div>

                        <div
                            className="item-wrapper"
                            onClick={() => {
                                this.showNav();
                                showInviteFriends();
                            }}
                        >
                            <Link className="nav-item" to="/">
                                {' '}
                                <Invite /> <p>INVITE FRIENDS</p>{' '}
                            </Link>
                        </div>
                        <div
                            className="item-wrapper"
                            onClick={() => {
                                this.showNav();
                                hideInviteFriends();
                            }}
                        >
                            {settings}
                            {settingsNavbar}:
                        </div>
                        <div className="item-wrapper no-hover scale">
                            <Link to="/">
                                {' '}
                                <Button
                                    btnType="Navbar"
                                    onClick={() => {
                                        hideInviteFriends();
                                        userSignOut();
                                        this.showNav();
                                    }}
                                >
                                    {' '}
                                    LOGOUT{' '}
                                </Button>{' '}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div
                        id="nav-bar"
                        ref={this.navRef}
                        style={{ visibility: this.state.navbar }}
                    >
                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/">
                                {' '}
                                <Logo /> <p>MappyPals</p>{' '}
                            </Link>
                        </div>

                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/about">
                                {' '}
                                <Team /> <p>ABOUT US</p>{' '}
                            </Link>
                        </div>

                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/contact">
                                {' '}
                                <AboutUs /> <p>CONTACT US</p>{' '}
                            </Link>
                        </div>

                        <div className="item-wrapper no-hover scale">
                            <React.Fragment>
                                <Link to="/login">
                                    {' '}
                                    <Button
                                        btnType="Navbar"
                                        onClick={() => {
                                            // userSignIn();
                                            this.showNav();
                                        }}
                                    >
                                        {' '}
                                        LOGIN{' '}
                                    </Button>{' '}
                                </Link>
                                <Link to="/signup">
                                    {' '}
                                    <Button
                                        btnType="Navbar"
                                        onClick={() => {
                                            this.showNav();
                                        }}
                                    >
                                        {' '}
                                        SIGN UP{' '}
                                    </Button>{' '}
                                </Link>
                            </React.Fragment>
                        </div>
                        <div className="item-wrapper no-hover">
                            <p className="nav-item">
                                Copyright - Team Members -{' '}
                                <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/learn/v4/overview">
                                    ZeroToMastery
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    logged: state.user.uid !== undefined && state.user.emailVerified
});
const mapDispatchToProps = {
    showInviteFriends,
    hideInviteFriends,
    userSignOut
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as AboutUs } from '../../pics/AboutUs.svg';
import { ReactComponent as Logo } from '../../pics/Logo.svg';
import { ReactComponent as Team } from '../../pics/Team.svg';
import { ReactComponent as Friends } from '../../pics/FriendsIcon.svg';
import { ReactComponent as Invite } from '../../pics/InviteFriends.svg';
import { ReactComponent as Settings } from '../../pics/MySettingsIcon.svg';

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
            if (this.state.navbar.length)
                this.setState({
                    navbar: '',
                    navbarRight: this.state.navbarWidth * 1 + 10 + 'px'
                });
            else this.setState({ navbar: 'none', navbarRight: '' });
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
            this.setState({ hamburger: 'block', navbar: 'none' });
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
                this.setState({ hamburger: 'block', navbar: 'none' });
            } else if (
                window.innerWidth >= 900 &&
                this.state.hamburger.length
            ) {
                this.setState({ hamburger: '', navbar: '' });
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
                this.setState({ hamburger: 'block', navbar: 'none' });
            else if (window.innerWidth >= 900 && this.state.hamburger.length)
                this.setState({ hamburger: '', navbar: '' });
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
        const { onLogin } = this.props;
        let settingsNavbar = '';
        if (this.state.settingsDropdown & (window.innerWidth > 900)) {
            settingsNavbar = (
                <div className="nav-item settings-navbar">
                    <Link to="/profilesettings">
                        <p
                            className="setting-navbar-item  u-border-bottom"
                            onClick={this.toggleSettingsNavbar}
                        >
                            Profile Settings
                        </p>
                    </Link>
                    <Link to="/passwordandemail">
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
                    <Link to="/profilesettings">
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
                {/*logged*/ true ? (
                    <div
                        id="nav-bar"
                        ref={this.navRef}
                        style={{ display: this.state.navbar }}
                    >
                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/">
                                {' '}
                                <Logo height="50px" /> <p>MappyPals</p>{' '}
                            </Link>
                        </div>

                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/friends">
                                {' '}
                                <Friends /> <p>FRIENDS</p>{' '}
                            </Link>
                        </div>

                        <div className="item-wrapper" onClick={this.showNav}>
                            <Link className="nav-item" to="/invitefriends">
                                {' '}
                                <Invite /> <p>INVITE FRIENDS</p>{' '}
                            </Link>
                        </div>
                        <div className="item-wrapper" onClick={this.showNav}>
                            {settings}
                            {settingsNavbar}:
                        </div>
                        <div className="item-wrapper no-hover scale">
                            <Link to="/logout">
                                {' '}
                                <p
                                    className="main-btn shadow"
                                    onClick={() => {
                                        onLogin();
                                        this.showNav();
                                    }}
                                >
                                    {' '}
                                    LOGOUT{' '}
                                </p>{' '}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div
                        id="nav-bar"
                        ref={this.navRef}
                        style={{ display: this.state.navbar }}
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
                                    <p
                                        className="main-btn shadow"
                                        onClick={() => {
                                            onLogin();
                                            this.showNav();
                                        }}
                                    >
                                        {' '}
                                        LOGIN{' '}
                                    </p>{' '}
                                </Link>
                                <Link to="/signup">
                                    {' '}
                                    <p
                                        className="main-btn shadow"
                                        onClick={() => {
                                            this.showNav();
                                        }}
                                    >
                                        {' '}
                                        SIGN UP{' '}
                                    </p>{' '}
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

export default Navbar;

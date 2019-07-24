import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Login.css';
import Form from './Form.js';
import { getLocalData } from '../../utils/localStorage';
import { authLogin } from '../../store/actions/auth';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import Button from '../../components/UI/Button/Button';

class Login extends Component {
    constructor(props) {
        super(props);
        window.FB.init({
            appId: process.env.REACT_APP_ID,
            cookie: true,
            xfbml: true,
            version: 'v3.2'
        });

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.confirmAccount();
    }

    componentDidUpdate() {
        this.confirmAccount();
    }

    confirmAccount() {
        const localData = getLocalData();
        localData.token ='';
        localData.userId='';
        // redirect user to homepage if he's already logged in
        if ((localData.token && localData.userId) || this.props.redirect) {
            return this.props.history.push('/');
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Submited values
    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;
        this.props.authLogin(email, password);

        // Clear inputs.
        this.setState({ email: '' });
        this.setState({ password: '' });
    };

    render() {
        const { error, loading } = this.props;

        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder=""
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <div className="forgot-password">
                        <Link to="/forgotpassword">I forgot my password</Link>
                    </div>
                    <div className="btnContainer">
                        <Button btnType="Submit" type="submit">
                            Login
                        </Button>
                    </div>
                    {loading && <div className="u-text-center">Loading...</div>}
                    {error && (
                        <div className="u-text-center">
                            <ErrorMessage content={error} />
                        </div>
                    )}
                    <p className="u-text-center">
                        No account?
                        <Link className="nav-item" to="/signup">
                            {' '}
                            SignUp
                        </Link>
                        &ensp;Or connect via:
                    </p>
                    <div className="btnContainer">
                        <label
                            htmlFor="fb-login-button"
                            aria-label="Login with Facebook"
                        >
                            <div
                                className="fb-login-button"
                                data-size="large"
                                data-button-type="login_with"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                                onClick={() => ({})}
                            />
                        </label>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { loading, error, redirect } = state.auth;
    return { loading, error, redirect };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ authLogin }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

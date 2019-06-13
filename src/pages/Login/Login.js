import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ky from 'ky';
import './Login.css';
import Form from './Form.js';
import { getLocalData, setLocalData } from '../../utils/localStorage';

class Login extends Component {
    constructor(props) {
        super(props);
        window.FB.init({
            appId: '298824577401793',
            cookie: true,
            xfbml: true,
            version: 'v3.2'
        });

        this.state = {
            email: '',
            password: '',
            message: '',
            redirect: false
        };
    }

    confirmAccount() {
        const localData = getLocalData();

        // redirect user to homepage if he's already logged in
        if (localData.token && localData.userId) {
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

        (async () => {
            try {
                const url = 'http://localhost:3001/users/login';

                const response = await ky.post(url, { json: this.state });
                const data = await response.json();

                if (data.token && data.userId) {
                    setLocalData(data.token, data.userId);

                    this.setState({ redirect: true });

                    this.props.history.push('/');
                } else {
                    // error message here
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }
        })();

        // Clear inputs.
        this.setState({ email: '' });
        this.setState({ password: '' });
    };

    render() {
        const { checkLoginState } = this.props;
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
                        <button type="submit">Login</button>
                    </div>
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
                                onClick={checkLoginState}
                            />
                        </label>
                    </div>
                </Form>
            </div>
        );
    }

    componentDidMount() {
        this.confirmAccount();
    }
}

export default Login;

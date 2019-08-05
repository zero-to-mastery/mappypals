import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USER_SIGN_IN_API_CALL } from '../../store/actions/types';
import './Login.css';
import Form from './Form.js';
import { userSignIn } from '../../store/actions/user';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import Button from '../../components/UI/Button/Button';

export const Login = () => {
    // react-redux hooks
    const dispatch = useDispatch();
    const loading = useSelector(state =>
        state.apiCallsInProgress.includes(USER_SIGN_IN_API_CALL)
    );
    // react hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await dispatch(userSignIn(email, password));
            setEmail('');
            setPassword('');
            // redirect to home
            setRedirectToHome(true);
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <>
            {redirectToHome && <Redirect to={'/'} />}
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            required
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder=""
                            onChange={event => setPassword(event.target.value)}
                            value={password}
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
        </>
    );
};
export default Login;

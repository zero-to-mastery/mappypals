import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from './Form.js';
import { IsPasswordValid } from '../../components/helper';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import './Login.css';
import { userSignUp, userUpdateProfile } from '../../store/actions/user';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { USER_SIGN_UP_API_CALL } from '../../store/actions/types';
import isEmail from 'validator/lib/isEmail';
const Signup = () => {
    // react-redux hooks
    const dispatch = useDispatch();
    const loading = useSelector(state =>
        state.apiCallsInProgress.includes(USER_SIGN_UP_API_CALL)
    );
    // react hooks
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const passwordMatch = () => password === confirmPassword;

    const handleSubmit = async event => {
        event.preventDefault();
        const isPasswordValid = IsPasswordValid(password);
        if (!isEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        // asynchronous call
        try {
            if (isPasswordValid && passwordMatch()) {
                await dispatch(userSignUp(email, password));
                await dispatch(
                    userUpdateProfile({
                        displayName: `${firstName} ${lastName}`
                    })
                );
                setRedirect(true);
            }
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    return (
        <>
            {redirect && <Redirect to={'/login'} />}
            <div className="Login" style={{ minHeight: `87.8vh` }}>
                <Form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="nameContainer">
                            <label className="item1" htmlFor="firstname">
                                Firstname
                                <input
                                    type="text"
                                    id="firstname"
                                    className="item2"
                                    name="name"
                                    value={firstName}
                                    onChange={event =>
                                        setFirstName(event.target.value)
                                    }
                                    required
                                />
                            </label>
                            <label className="item3" htmlFor="lastname">
                                Lastname
                                <input
                                    type="text"
                                    id="lastname"
                                    className="item4"
                                    name="lastname"
                                    value={lastName}
                                    onChange={event =>
                                        setLastName(event.target.value)
                                    }
                                    required
                                />
                            </label>
                        </div>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                required
                            />
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                name="password"
                                aria-describedby="newPassword"
                                value={password}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                            />
                        </label>
                        <label htmlFor="confirmPassword">
                            Confirm password
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={event =>
                                    setConfirmPassword(event.target.value)
                                }
                                required
                            />
                        </label>
                        <div className="btnContainer">
                            <Button btnType="Submit" type="submit">
                                Create Account
                            </Button>
                        </div>
                        {loading && (
                            <div className="u-text-center">Loading...</div>
                        )}
                        {error && (
                            <div className="u-text-center">
                                <ErrorMessage content={error} />
                            </div>
                        )}
                    </fieldset>
                    <p className="u-text-center">Or connect with: </p>
                    <div className="btnContainer">
                        <label
                            htmlFor="fb-login-button"
                            aria-label="Login with Facebook"
                        >
                            <div
                                className="fb-login-button"
                                display="inline-block"
                                data-size="large"
                                data-button-type="login_with"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                            />
                        </label>
                    </div>
                    <p className="u-text-center">
                        Already have an account?
                        <Link className="nav-item" to="/login">
                            {' '}
                            Login{' '}
                        </Link>
                    </p>
                </Form>
            </div>
        </>
    );
};

export default Signup;

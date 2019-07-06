import React, { Component } from 'react';
import classes from './PasswordMessage.module.css';

class PasswordMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordLength: false,
            numberLength: false,
            capitalLetter: false,
            passwordIdentical: false
        };
    }
    componentDidUpdate(oldProps) {
        // Update every time new values are added.
        const newProps = this.props;
        if (oldProps.password !== newProps.password) {
            this.resetCheck();
            this.passwordValidation(
                this.props.password,
                this.props.confirmPassword
            );
        }
        if (oldProps.confirmPassword !== newProps.confirmPassword) {
            this.resetCheck();
            this.passwordValidation(
                this.props.password,
                this.props.confirmPassword
            );
        }
    }
    passwordValidation = (password, confirmPassword) => {
        console.log('Password validaion');
        // Validation: https://stackoverflow.com/questions/18367258/validation-for-password-is-at-least-6-characters
        if (password.length >= 6) {
            this.setState({ passwordLength: true });
        }
        // check for a number
        if (!/[0-9]/.test(password) === false) {
            this.setState({ numberLength: true });
        }
        // check for a capital letter and lowercase letter
        if (
            /[A-Z]/.test(password) === true &&
            /[a-z]/.test(password) === true
        ) {
            this.setState({ capitalLetter: true });
        }
        // Check if passwords are identical
        if (confirmPassword.length > 0) {
            this.setState({ passwordIdentical: true });
        }
    };
    resetCheck = () => {
        this.setState({
            passwordLength: false,
            numberLength: false,
            capitalLetter: false,
            passwordIdentical: false
        });
    };
    render() {
        const {
            passwordLength,
            numberLength,
            capitalLetter,
            passwordIdentical
        } = this.state;
        let passwordLengthVar = (
            <ul className={classes.incorrectIcon}>
                <li className={classes.incorrect}>
                    Be at least 6 character long
                </li>
            </ul>
        );
        let numberLengthVar = (
            <ul className={classes.incorrectIcon}>
                <li className={classes.incorrect}>
                    Include at least one number
                </li>
            </ul>
        );
        let capitalLetterVar = (
            <ul className={classes.incorrectIcon}>
                <li className={classes.incorrect}>
                    Include both lower and upper case character
                </li>
            </ul>
        );
        let passwordIdenticalVar = '';

        if (passwordLength) {
            passwordLengthVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Be at least 6 character long
                    </li>
                </ul>
            );
        }
        if (numberLength) {
            numberLengthVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Include at least one number
                    </li>
                </ul>
            );
        }
        if (capitalLetter) {
            capitalLetterVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Include both lower and upper case character
                    </li>
                </ul>
            );
        }
        if (
            passwordIdentical &&
            this.props.password === this.props.confirmPassword
        ) {
            passwordIdenticalVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>Password match</li>
                </ul>
            );
        }
        if (
            passwordIdentical &&
            this.props.password !== this.props.confirmPassword
        ) {
            passwordIdenticalVar = (
                <ul className={classes.incorrectIcon}>
                    <li className={classes.incorrect}>Password match</li>
                </ul>
            );
        }
        return (
            <div className={classes.container}>
                <p className={classes.title}>
                    <i className={`${classes.LockIcon} fas fa-lock`} />
                    Your Password need to:
                </p>
                {capitalLetterVar}
                {numberLengthVar}
                {passwordLengthVar}
                {passwordIdenticalVar}
            </div>
        );
    }
}

export default PasswordMessage;

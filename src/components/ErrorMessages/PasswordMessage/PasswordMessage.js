/*
import React from 'react';
import classes from './ErrorMessages.module.css';

const ErrorMessage = ({ content }) => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>
                <i className={`${classes.LockIcon} fas fa-lock`} />
                Your Password need to:
            </p>
            <span aria-live="polite" className={classes.warning}>
                {content}
            </span>
        </div>
    );
};

export default ErrorMessage;
*/
import React, { Component } from 'react';
import classes from './PasswordMessage.module.css';

class PasswordMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordLength: false,
            numberLength: false,
            capitalLetter: false
        };
    }
    /*
    componentDidMount() {
        console.log(this.props);
        console.log(this.props.password);
        this.passwordValidation(this.props.password);
    }
    */
    /*
    static getDerivedStateFromProps(props){
        console.log(props);
        if (this.props.password !== props.value) {
            return {
                value: props.value,
                computed_prop: heavy_computation(props.value)
            }
        }
        return null
    }
    */
    componentDidMount() {
        this.passwordValidation(this.props.password);
    }
    componentDidUpdate(oldProps) {
        console.log(oldProps);
        console.log(this.props);
        const newProps = this.props;
        if (oldProps.field !== newProps.field) {
            this.resetCheck();
            this.passwordValidation(this.props.password);
        }
    }
    /*
    componentWillReceiveProps(newProps) {
        const oldProps = this.props;
        if (oldProps.field !== newProps.field) {
            this.resetCheck();
            this.passwordValidation(this.props.password);
        }
    }
    */
    passwordValidation = password => {
        console.log(this.state);
        console.log(this.props.password);
        // Validation: https://stackoverflow.com/questions/18367258/validation-for-password-is-at-least-6-characters
        if (password >= 6) {
            this.setState({ passwordLength: true });
        }
        // check for a number
        if (!/[0-9]/.test(password) === false) {
            this.setState({ numberLength: true });
        }
        // check for a capital letter and lowercase letter
        if (
            !/[A-Z]/.test(password) === false &&
            !/[a-z]/.test(password) === false
        ) {
            this.setState({ capitalLetter: true });
        }
    };
    resetCheck = () => {
        this.setState({
            passwordLength: false,
            numberLength: false,
            capitalLetter: false
        });
    };
    render() {
        const { passwordLength, numberLength, capitalLetter } = this.state;
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

        if (passwordLength) {
            console.log('password is 6 letter long');
            passwordLengthVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Be at least 6 character long
                    </li>
                </ul>
            );
        }
        if (numberLength) {
            console.log('password has number');

            numberLengthVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Include at least one number
                    </li>
                </ul>
            );
        }
        if (capitalLetter) {
            console.log('password uses capital and lower case letters');
            capitalLetterVar = (
                <ul className={classes.correctIcon}>
                    <li className={classes.correct}>
                        Include both lower and upper case character
                    </li>
                </ul>
            );
        }
        // <i class="fas fa-check"></i>
        // <i class="fas fa-times"></i>
        return (
            <div className={classes.container}>
                <p className={classes.title}>
                    <i className={`${classes.LockIcon} fas fa-lock`} />
                    Your Password need to:
                </p>
                {capitalLetterVar}
                {numberLengthVar}
                {passwordLengthVar}
            </div>
        );
    }
}

export default PasswordMessage;
/*
Password check to check if,
Include both lower and upper case. If yes show x if not show V.

1) Get props password
2) 3 list items. Every single list item can have diffent bullet.
*/

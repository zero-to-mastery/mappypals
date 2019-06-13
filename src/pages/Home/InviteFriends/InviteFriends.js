import React, { Component } from 'react';
import Form from '../../Login/Form';
import classes from './InviteFriends.module.css';
import ErrorMessages from '../../../components/ErrorMessages/ErrorMessages';
import DisplayInvites from './DisplayInvites/DisplayInvites';

class InviteFriends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Invites: [],
            email: '',
            ErrorEmptyInput: false
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.storeInvites();
        this.resetEmail();
    };
    storeInvites = () => {
        const { email, Invites } = this.state;
        const dublicateEmail = Invites.find(Invite => Invite === email);

        if (this.state.email === '') {
            this.displayErrorEmptyInput();
            return false;
        } else if (!dublicateEmail) {
            this.setState(
                {
                    Invites: [...this.state.Invites, this.state.email]
                },
                function() {
                    console.log(this.state.Invites);
                }
            );
        }
    };
    resetEmail = () => this.setState({ email: '' });
    displayErrorEmptyInput = () => this.setState({ ErrorEmptyInput: true });
    hideErrorEmptyInput = () => this.setState({ ErrorEmptyInput: false });
    render() {
        let ErrorMessageVar = '';
        if (this.state.ErrorEmptyInput) {
            ErrorMessageVar = <ErrorMessages content="Input is empty" />;
        }

        return (
            <div className={classes.container}>
                <Form onSubmit={this.handleSubmit} className={classes.form}>
                    <h2 className={classes.title}>
                        Send an invite to multiple friends {ErrorMessageVar}
                    </h2>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        value={this.state.email}
                        className={classes.input}
                        onChange={this.handleChange}
                        type="email"
                    />
                    <button className={classes.submit}>Send Invites</button>
                    {this.state.Invites.map((data, index) => {
                        return <DisplayInvites key={index} />;
                    })}
                </Form>
            </div>
        );
    }
}

export default InviteFriends;
